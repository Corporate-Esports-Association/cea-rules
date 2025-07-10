// "use client"
import React from 'react'
// import { usePathname } from 'next/navigation'
import { Cards } from 'nextra/components'
import { MessageCircle, User, Crown } from 'lucide-react'
import gameLeadsData from '../app/data/gameLeads.json' 
import Image from 'next/image'


// Instead of pulling gameleads from a .json file here, we could use the google sheet that holds this info
// and either pull from that OR have our website cache that and we can make API calls to the cea.gg website instead?
// otherwise we can just export the google sheet when needed as .json and use it here as well

export const GameLeads = ({ game, className = '' }) => {
    // Extract game from URL path (e.g., /fortnite/rules -> fortnite, /valorant -> valorant)
    // const pathname = usePathname()
    // const pathSegments = pathname.split('/').filter(Boolean) // Remove empty segments
    // const game = pathSegments.length > 1 ? pathSegments[0] : pathSegments[pathSegments.length - 1]
  
    let leadsToDisplay = []
    let groupedByGame = false
    
    if (game === 'all') {
        // Group leads by game
        leadsToDisplay = Object.entries(gameLeadsData).map(([gameName, gameLeads]) => ({
            gameName,
            leads: gameLeads
        }))
        groupedByGame = true
    } else {
        leadsToDisplay = gameLeadsData[game] || []
    }

    if ((!groupedByGame && (!leadsToDisplay || leadsToDisplay.length === 0)) || 
        (groupedByGame && leadsToDisplay.length === 0)) {
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
            </div>

            {groupedByGame ? (
                // Display grouped by game
                leadsToDisplay.map(({ gameName, leads }) => (
                    <div key={gameName} style={{ marginBottom: '2rem' }}>
                        <h3 style={{ 
                            textTransform: 'capitalize', 
                            marginBottom: '1rem',
                            fontSize: '1.1rem',
                            fontWeight: '600'
                        }}>
                            {gameName.replace(/-/g, ' ')}
                        </h3>
                        <Cards>
                            {leads.map((lead, index) => (
                                <Cards.Card
                                    key={`${gameName}-${index}`}
                                    title={
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <span style={{ fontWeight: '600' }}>
                                                {lead.name}
                                            </span>
                                            <span style={{
                                                fontSize: '0.8rem',
                                                color: 'var(--nextra-fg-secondary)',
                                                fontWeight: '400'
                                            }}>
                                                {lead.role}
                                            </span>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <MessageCircle size={16} />
                                                    <code style={{
                                                        fontSize: '0.85rem',
                                                        backgroundColor: 'var(--nextra-bg-secondary)',
                                                        borderRadius: '0.25rem'
                                                    }}>
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
                    </div>
                ))
            ) : (
                // Display single game leads
                <Cards>
                    {leadsToDisplay.map((lead, index) => (



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
            )}

            {/* <div style={{
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
            </div> */}
            {/* <hr /> */}
        </div>
    )
}

export default GameLeads
