// "use client"
import React from 'react'
// import { usePathname } from 'next/navigation'
import { Cards } from 'nextra/components'
import { MessageCircle, User, Crown } from 'lucide-react'
import gameLeadsData from '../data/gameLeads.json'
import Image from 'next/image'

export const GameLeads = ({ game, className = '' }) => {
    // Extract game from URL path (e.g., /fortnite/rules -> fortnite, /valorant -> valorant)
    // const pathname = usePathname()
    // const pathSegments = pathname.split('/').filter(Boolean) // Remove empty segments
    // const game = pathSegments.length > 1 ? pathSegments[0] : pathSegments[pathSegments.length - 1]

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
        <div className={className}
        // style={{color:'white', backgroundColor:'gray', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--nextra-border-color)'}}
        >
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
            </div>

            <Cards>
                {leads.map((lead, index) => (



                    <Cards.Card
                        key={index}
                        // icon={lead.role.toLowerCase().includes('lead') ? <Crown size={20} /> : <User size={20} />}
                        title={
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <span style={{ fontWeight: '600' }}>
                                    {/* {lead.role.toLowerCase().includes('lead') ? <Crown size={20} /> : <User size={20} />} */}
                                    {lead.name}
                                </span>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--nextra-fg-secondary)',
                                    fontWeight: '400'
                                }}>
                                    {lead.role}

                                    {/* <p>
                                        <span style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--nextra-fg-secondary)',
                                            fontWeight: '400'
                                        }}>
                                            {lead.discordId}
                                        </span>
                                    </p> */}
                                </span>


                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MessageCircle size={16} />
                                        <code style={{
                                            fontSize: '0.85rem',
                                            // padding: '0.125rem 0.25rem',
                                            backgroundColor: 'var(--nextra-bg-secondary)',
                                            borderRadius: '0.25rem'
                                        }}>
                                            {/* {lead.discordId.replace('@', '').replace('#', '')} */}
                                            {lead.discordName || lead.discordId.replace('@', '').replace('#', '')}
                                        </code>
                                    </div>

                                </div>
                            </div>
                        }
                        href={`https://discord.com/users/${lead.discordId.replace('@', '').replace('#', '')}`}
                    >

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '0.0rem',
                            flexWrap: 'nowrap',
                            overflow: 'hidden',
                        }}>
                            <Image
                                src={lead.avatar || 'https://placecats.com/300/200'}
                                alt={`${lead.name}'s avatar`}
                                width={125}
                                height={125}
                                style={{
                                    borderRadius: '50%',
                                    marginRight: '0.5rem',
                                    marginTop: '1rem',
                                    flexShrink: 0
                                }}
                            />
                        </div>
        
                    </Cards.Card>
                ))}
            </Cards>

            <div style={{
                padding: '1rem',
                backgroundColor: 'var(--nextra-bg-secondary)',
                borderRadius: '0.5rem',
                border: '1px solid var(--nextra-border-color)'
            }}>
                <h4 style={{
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
                    <li>Check the rulebook first for general questions</li>
                </ul>
            </div>
            <hr />
        </div>
    )
}

export default GameLeads
