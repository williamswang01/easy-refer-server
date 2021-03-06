import request from 'supertest'
import app from '../../../app'
import {generateJWT} from '../../../utils/auth'
import db from '../../../models/db'
import {initMockDB, resumes, users} from '../../../mocks/dbObjects'

const resumeRoute = '/api/resumes'
const [resume2] = resumes
const [user1, user2, user3] = users

const agent = request(app)

describe('ResumesCtrlr', () => {
  beforeAll(async () => {
    await db.sync({force: true})
    await initMockDB()
  })
  afterAll(async () => await db.close())

  describe('getResume', () => {
    it('成功获取 resume-2 简历', async () => {
      const jwtToken = generateJWT(user1.userId)
      const {status, body: responseResume} = await agent
        .get(`${resumeRoute}/${resume2.resumeId}`)
        .set('Authorization', jwtToken)

      expect(status).toEqual(200)

      expect(responseResume.resumeId).toEqual(resume2.resumeId)
      expect(responseResume.url).toEqual(resume2.url)
      expect(responseResume.name).toEqual(resume2.name)
    })

    it('找不到 resume-99 简历', async () => {
      const jwtToken = generateJWT(user1.userId)
      const {status, body} = await agent
        .get(`${resumeRoute}/resume-99`)
        .set('Authorization', jwtToken)

      expect(status).toEqual(404)

      expect(body).toHaveProperty('message')
      expect(body.message).toEqual('简历不存在')
    })

    it('user-3 无法访问 user-2 的简历', async () => {
      const jwtToken = generateJWT(user3.userId)
      const {status, body} = await agent
        .get(`${resumeRoute}/${resume2.resumeId}`)
        .set('Authorization', jwtToken)

      expect(status).toEqual(403)
      expect(body).toHaveProperty('message')
      expect(body.message).toEqual('无权访问该简历')
    })
  })
})
