import {DataTypes} from 'sequelize'
import {
  AllowNull,
  Column,
  Default,
  HasMany,
  HasOne,
  PrimaryKey,
  Table,
  Unique,
  Model,
  ForeignKey
} from 'sequelize-typescript'
import JobModel from '@/models/JobModel'
import ReferModel from '@/models/ReferModel'
import ResumeModel from '@/models/ResumeModel'

@Table({tableName: 'users'})
class UserModel extends Model<UserModel> {
  [key: string]: any

  // 普通字段
  public myReferTotal = 0
  public approvedMyReferCount = 0
  public otherReferTotal = 0
  public approvedOtherReferCount = 0

  // 字段
  @Unique
  @AllowNull(false)
  @PrimaryKey
  @Column(DataTypes.STRING)
  public userId!: string

  @Column(DataTypes.STRING)
  public password!: string

  @Unique
  @Column(DataTypes.STRING)
  public email!: string

  @Column(DataTypes.INTEGER)
  public experience!: number | null

  @Column(DataTypes.STRING)
  public name!: string | null

  @Column(DataTypes.TEXT)
  public intro!: string | null

  @Column(DataTypes.STRING)
  public leetCodeUrl!: string | null

  @Column(DataTypes.TEXT)
  public thirdPersonIntro!: string | null

  @Column(DataTypes.STRING)
  public phone!: string | null

  @Default('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png')
  @Column(DataTypes.STRING)
  public avatarUrl: string = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'

  // 外键
  @ForeignKey(() => JobModel)
  public jobId!: string | null

  // 关系
  @HasOne(() => JobModel)
  public readonly job?: JobModel

  @HasMany(() => ReferModel, 'refereeId')
  public readonly myReferList?: ReferModel[]

  @HasMany(() => ReferModel, 'refererId')
  public readonly otherReferList?: ReferModel[]

  @HasMany(() => ResumeModel)
  public readonly resumeList?: ResumeModel[]
}

export default UserModel