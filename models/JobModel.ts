import {DataTypes} from 'sequelize'
import {AllowNull, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique} from 'sequelize-typescript'
import UserModel from '@/models/UserModel'
import ReferModel from '@/models/ReferModel'

@Table({tableName: 'jobs'})
class JobModel extends Model<JobModel> {
  [key: string]: any
  // 字段
  @Unique
  @AllowNull(false)
  @PrimaryKey
  @Column(DataTypes.STRING)
  public jobId!: string

  @Column(DataTypes.STRING)
  public company!: string

  @Column(DataTypes.STRING)
  public requiredFields!: string

  @Column(DataTypes.DATE)
  public deadline!: Date

  @Column(DataTypes.INTEGER)
  public expiration!: number

  @Column(DataTypes.INTEGER)
  public referTotal!: number

  @Column(DataTypes.STRING)
  public source!: string | null

  // 外键
  @ForeignKey(() => UserModel)
  public refererId!: string

  // 关系
  @BelongsTo(() => UserModel)
  public readonly referer?: UserModel

  @HasMany(() => ReferModel)
  public readonly referList?: ReferModel[]
}

export default JobModel
