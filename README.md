# Agent Alpha Dolly

**Brand name** and central hub for the Agent Alpha Dolly ecosystem.

## Related Projects

| Repository | Description | Status |
|------------|-------------|--------|
| [**agentalphadolly-grok**](https://github.com/getachewnohe-debug/agentalphadolly-grok) | Interactive Grok (xAI) agent with full GitHub tools (issues, PRs, reviews) | Public |
| [**agentalphadolly-github-action**](https://github.com/getachewnohe-debug/agentalphadolly-github-action) | GitHub Action that uses Grok for automatic PR reviews & issue triage | Public |
| [agentalphadollyslack-agent](https://github.com/getachewnohe-debug/agentalphadollyslack-agent) | Slack agent integration | Private |

## Vision

Agent Alpha Dolly combines:
- **Grok** (xAI) as the intelligence layer
- **GitHub** as the collaboration & code surface
- Optional **Slack** for team chat

## Getting Started

1. Clone the interactive agent:
   ```bash
   git clone https://github.com/getachewnohe-debug/agentalphadolly-grok.git
   cd agentalphadolly-grok
   npm install
   cp .env.example .env   # add XAI_API_KEY + GITHUB_TOKEN
   npm run agent
   ```

2. Add the GitHub Action to any repo (see the action README).

## License

MIT
