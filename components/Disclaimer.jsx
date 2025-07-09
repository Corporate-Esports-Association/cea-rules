import React from 'react'
import { AlertTriangle } from 'lucide-react'


const DISCLAIMER_DATA = {
  'ea-fc': {
    company: 'Electronic Arts Inc.',
    additionalText: 'EA SPORTS FC and all related properties are trademarks of Electronic Arts Inc.'
  },
  'rocket-league': {
    company: 'Psyonix LLC and Epic Games, Inc.',
    additionalText: 'Rocket League is a trademark of Psyonix LLC.'
  },
  'fortnite': {
    company: 'Epic Games, Inc.',
    additionalText: 'THIS EVENT IS IN NO WAY SPONSORED, ENDORSED, OR ADMINISTERED BY, OR OTHERWISE ASSOCIATED WITH, EPIC GAMES, INC. THE INFORMATION PLAYERS PROVIDE IN CONNECTION WITH THIS EVENT IS BEING PROVIDED TO EVENT ORGANIZER AND NOT TO EPIC GAMES, INC. BY PARTICIPATING IN THIS EVENT, TO THE EXTENT PERMITTED BY APPLICABLE LAW, PLAYERS AGREE TO RELEASE AND HOLD HARMLESS EPIC GAMES, INC., ITS LICENSORS, ITS AND THEIR AFFILIATES, AND ITS AND THEIR EMPLOYEES, OFFICERS, DIRECTORS, AGENTS, CONTRACTORS, AND OTHER REPRESENTATIVES FROM ALL CLAIMS, DEMANDS, ACTIONS, LOSSES, LIABILITIES, AND EXPENSES RELATED TO THE EVENT.'
  },
  'valorant': {
    company: 'Riot Games, Inc.',
    additionalText: 'VALORANT is a trademark of Riot Games, Inc.'
  },
  'league-of-legends': {
    company: 'Riot Games, Inc.',
    additionalText: 'League of Legends is a trademark of Riot Games, Inc.'
  },
  'counter-strike': {
    company: 'Valve Corporation',
    additionalText: 'Counter-Strike is a trademark of Valve Corporation.'
  }
}



export const Disclaimer = ({ game, className = '' }) => {
  const config = DISCLAIMER_DATA[game]
  
  if (!config) {
    console.warn(`No disclaimer configuration found for game: ${game}`)
    return null
  }

  return (
    <div className={`disclaimer-container ${className}`}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1.25rem',
        borderRadius: '0.75rem',
        marginTop: '2rem',
        marginBottom: '1rem',
        backgroundColor: 'rgba(255, 193, 7, 0.15)', // Amber/yellow background
        border: '2px solid rgba(255, 193, 7, 0.4)', // Amber border
        boxShadow: '0 2px 8px rgba(255, 193, 7, 0.1)', // Subtle glow
      }}>
        <AlertTriangle 
          size={24} 
          style={{ 
            flexShrink: 0,
            marginTop: '0.125rem',
            color: '#f59e0b', // Amber-500
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
          }} 
        />
        <div>
          <h4
           style={{ 
            margin: '0 0 0.5rem 0',
            fontSize: '1.1rem',
            fontWeight: '700',
            color: '#d97706', // Amber-600 for better contrast
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
          >
            Legal Disclaimer
          </h4>
          <p style={{ 
            margin: '0',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            color: '#92400e', // Amber-800 for dark text
            fontWeight: '500'
          }}>
            This tournament is not affiliated with or sponsored by <strong>{config.company}</strong> or its licensors.
            {config.additionalText && (
              <>
                <br />
                <em>{config.additionalText}</em>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Disclaimer