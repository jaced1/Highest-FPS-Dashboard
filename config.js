/**
 * Discord Bot Dashboard & Landing Page Configuration
 * @author Veqris (For JulesFX)
 * @license GPL-3.0
 */

const CONFIG = {
    // --- Bot Details ---
    botName: "JulesBot",
    botTagline: "The Ultimate All-in-One Discord Management & Music Bot",
    botDescription: "Elevate your Discord community with high-performance moderation, crystal-clear 4K audio playback, custom economy, and automated role management.",
    botAvatar: "https://cdn.discordapp.com/embed/avatars/0.png", // Replace with your bot avatar URL
    
    // --- Links & Integration ---
    inviteLink: "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=8",
    supportServerLink: "https://discord.gg/julesfx",
    websiteLink: "https://store.julesfx.com",
    githubLink: "https://github.com/Veqris/discord-bot-dashboard",

    // --- Live Statistics Counter ---
    stats: {
        servers: 1450,       // Total active Discord servers
        users: 485000,       // Total members reached
        commands: 2150000,   // Total commands executed
        uptime: "99.98%"     // Bot uptime percentage
    },

    // --- Bot Features Overview ---
    features: [
        {
            icon: "fa-shield-halved",
            title: "Advanced Auto-Moderation",
            desc: "Protection against spam, raid attempts, malicious links, and toxic language with configurable punishment thresholds."
        },
        {
            icon: "fa-compact-disc",
            title: "Ultra HD Audio Player",
            desc: "Stream music seamlessly from YouTube, Spotify, and Soundcloud with zero latency and customizable EQ filters."
        },
        {
            icon: "fa-coins",
            title: "Dynamic Economy & Games",
            desc: "Engage your server members with daily rewards, gambling minigames, custom shops, and inventory trading."
        },
        {
            icon: "fa-chart-pie",
            title: "Live Analytics & Logs",
            desc: "Comprehensive server audit logging, member growth analytics, and message activity heatmaps."
        }
    ],

    // --- Command List ---
    commands: [
        { name: "/ban", category: "moderation", desc: "Permanently ban a member from the server with optional reason and message purge." },
        { name: "/kick", category: "moderation", desc: "Kick a member from the server and notify them via direct message." },
        { name: "/mute", category: "moderation", desc: "Timeout a member for a specified duration (e.g., 10m, 1h, 1d)." },
        { name: "/clear", category: "moderation", desc: "Bulk delete up to 100 messages in the current channel." },
        { name: "/play", category: "music", desc: "Play a song or playlist from YouTube, Spotify, or Soundcloud link/search query." },
        { name: "/skip", category: "music", desc: "Skip the currently playing audio track." },
        { name: "/queue", category: "music", desc: "Display the current music queue and upcoming audio tracks." },
        { name: "/volume", category: "music", desc: "Adjust the music playback volume (0% - 150%)." },
        { name: "/balance", category: "economy", desc: "Check your current wallet and bank balance." },
        { name: "/daily", category: "economy", desc: "Claim your daily monetary bonus reward." },
        { name: "/work", category: "economy", desc: "Perform a random job to earn coins every hour." },
        { name: "/userinfo", category: "utility", desc: "Display detailed profile info, joined date, and roles of a member." },
        { name: "/serverinfo", category: "utility", desc: "Display server owner, creation date, member count, and boost tier." },
        { name: "/ping", category: "utility", desc: "Measure latency between Discord gateway and the bot websocket." }
    ],

    // --- Frequently Asked Questions (FAQ) ---
    faqs: [
        {
            question: "How do I invite JulesBot to my Discord server?",
            answer: "Simply click the 'Add to Discord' button on top of this page, select your server from the dropdown, grant the requested permissions, and complete the verification step."
        },
        {
            question: "Is JulesBot completely free to use?",
            answer: "Yes! All core features including music playback, auto-moderation, and economy systems are 100% free forever. Premium tiers offer extra music nodes and custom prefix perks."
        },
        {
            question: "How can I get support or report a bug?",
            answer: "Join our official Support Discord server by clicking 'Join Support' or visit our official community community forums."
        }
    ]
};
