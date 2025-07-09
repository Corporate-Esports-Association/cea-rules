import React from 'react'
import { Cards } from 'nextra/components'
import { MessageCircle, User, Crown } from 'lucide-react'
import gameLeadsData from '../data/gameLeads.json'

export const GameLeads = ({ game, className = '' }) => {
    const leads = gameLeadsData[game]

    if (!leads || leads.length === 0) {
        console.warn(`No game leads found for game: ${game}`)
        return (
            <div className={className}>
                <p>No game leads configured for this game. Please contact support.</p>
            </div>
        )
    }

    return (
        <div className={className}>
            <div style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
                <h4 style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',

                }}>
                    <MessageCircle size={20} />
                    For questions, disputes, or assistance during tournaments, contact the appropriate Game Lead via Discord.
                </h4>
                {/* <p style={{ 
          fontSize: '0.9rem', 
          color: 'var(--nextra-fg-secondary)',
          margin: '0 0 1.5rem 0'
        }}>
          For questions, disputes, or assistance during tournaments, contact the appropriate Game Lead via Discord.
        </p> */}
            </div>

            <Cards>
                {leads.map((lead, index) => (
                    <Cards.Card
                        key={index}
                        icon={lead.role.toLowerCase().includes('lead') ? <Crown size={20} /> : <User size={20} />}
                        title={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <span style={{ fontWeight: '600' }}>{lead.name}</span>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--nextra-fg-secondary)',
                                    fontWeight: '400'
                                }}>
                                    {lead.role}
                                </span>
                            </div>
                        }
                        href={`https://discord.com/users/${lead.discordId.replace('@', '').replace('#', '')}`}
                        description={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MessageCircle size={16} />
                                    <code style={{
                                        fontSize: '0.85rem',
                                        padding: '0.125rem 0.25rem',
                                        backgroundColor: 'var(--nextra-bg-secondary)',
                                        borderRadius: '0.25rem'
                                    }}>
                                        {lead.discordId}
                                    </code>
                                </div>
                                <p style={{
                                    fontSize: '0.8rem',
                                    margin: 0,
                                    color: 'var(--nextra-fg-secondary)'
                                }}>
                                    Click to open Discord profile
                                </p>
                            </div>
                        }
                    />
                ))}
            </Cards>

            <div style={{
                marginTop: '1rem',
                padding: '1rem',
                backgroundColor: 'var(--nextra-bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--nextra-border-color)'
            }}>
                <h4 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                }}>
                    Contact Guidelines
                </h4>
                <ul style={{
                    margin: 0,
                    paddingLeft: '1.25rem',
                    fontSize: '0.85rem',
                    color: 'var(--nextra-fg-secondary)'
                }}>
                    <li>Use Discord for immediate assistance during matches</li>
                    <li>Mention game leads only for urgent tournament-related issues</li>
                    <li>Check the rulebook first for general questions</li>
                    <li>Be respectful and provide clear details when requesting help</li>
                </ul>
            </div>
        </div>
    )
}

export default GameLeads
