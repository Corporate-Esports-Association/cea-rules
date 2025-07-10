import { GithubIcon, TwitterIcon, YoutubeIcon, LinkedinIcon, TwitchIcon } from 'lucide-react'
import { DiscordIcon } from '../../components/icons/DiscordIcon'

export const socialLinks = {
  linkedin: {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/corporateesportsassociation',
    icon: <LinkedinIcon size={24} />
  },
  twitter: {
    name: 'Twitter',
    href: 'https://twitter.com/intent/user?screen_name=CorporateEsport',
    icon: <TwitterIcon size={24} />
  },
  youtube: {
    name: 'YouTube',
    href: 'https://www.youtube.com/c/CorporateEsportsAssociation',
    icon: <YoutubeIcon size={24} />
  },
  twitch: {
    name: 'Twitch',
    href: 'https://www.twitch.tv/corpesports',
    icon: <TwitchIcon size={24} />
  },
  discord: {
    name: 'Discord',
    href: 'https://cea.gg/discord',
    icon: <DiscordIcon size={24} />
  }
}