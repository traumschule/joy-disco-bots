import { Column, Model, Table } from 'sequelize-typescript'

@Table({
  tableName: 'pending_verification',
  underscored: true,
  indexes: [ // https://github.com/RobinBuschmann/sequelize-typescript/issues/725#issuecomment-686593266
    {
      name: 'ix_pending_verification_membership',
      fields: ['claimed_membership'],
    },
    {
      name: 'ix_pending_verification_started_by',
      fields: ['started_by_discord_handle'],
    },
  ]
})
export class PendingVerification extends Model {
  
  @Column
  claimedMembership!: string

  @Column
  claimedAccountAddress!: string 

  @Column
  startedByDiscordHandle!: string 

  @Column challenge!: string

}