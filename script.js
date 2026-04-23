const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Achan Riak",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_local_woman_green_wrap.jpg",
    timestamp: "24 April 2026 at 13:34",
    content:
      "Translated from Juba Arabic:\nSame thing again like January. People are saying soldiers were told not to leave anything in the villages. Mothers are already moving with the children. If this is really for our safety, why are families running first?",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_01.jpg",
    },
    metrics: {
      likes: 22,
      comments: 11,
      shares: 15,
    },
    profileMeta: {
      intro: "Concerned local resident",
      bio: "Posting about safety, family, and local developments",
      location: "Bor (from Akobo)",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: "640 friends",
      followers: "210 followers",
      work: "Community member",
      education: null,
    },
  },
  {
    id: 2,
    platform: "facebook",
    profileName: "Nyirol Community Voice",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_local_megaphone_blue.jpg",
    timestamp: "24 April 2026 at 13:37",
    content:
      "Translated from Nuer:\nWe heard these words before in January and now the same fear is back. People are saying the soldiers have again been told to leave nothing behind in the villages. Women, children, and elders are moving tonight. If civilians are safe, why this panic again?",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_02_waveform.jpg",
    },
    metrics: {
      likes: 29,
      comments: 8,
      shares: 19,
    },
    profileMeta: {
      intro: "Community updates",
      bio: "Sharing local updates and concerns from residents",
      location: "Nyirol",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: null,
      followers: "1.6K followers",
      work: "Community page",
      education: null,
    },
  },
  {
    id: 3,
    platform: "x",
    profileName: "Nuer Rights Now",
    profileHandle: "@NuerRightsNow",
    verified: false,
    profilePicture: "assets/profiles/pp_diaspora_red_textlogo.jpg",
    timestamp: "24 Apr 2026 · 13:40",
    content:
      "January was the warning. April is the pattern. Displacement, denials, and the same language again in Jonglei. Civilians are not imagining this. #Jonglei #SouthSudan",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_03.jpg",
    },
    metrics: {
      replies: 14,
      reposts: 48,
      likes: 96,
      views: 5900,
    },
    profileMeta: {
      intro: "Diaspora advocacy account",
      bio: "Advocating on South Sudan, accountability, and civilian protection",
      location: "Nairobi, Kenya",
      joined: "Joined February 2021",
      note: "Click here to return to post",
      following: "412 Following",
      followers: "8.2K Followers",
      website: null,
    },
  },
  {
    id: 4,
    platform: "x",
    profileName: "Upper Nile Watch",
    profileHandle: "@UpperNileWatch",
    verified: false,
    profilePicture: "assets/profiles/pp_diaspora_black_red_logo.jpg",
    timestamp: "24 Apr 2026 · 13:42",
    content:
      "The rhetoric from January is being recycled through action: evacuations, fear, and silence. That is how atrocity risk returns. #SouthSudan #Jonglei",
    media: null,
    metrics: {
      replies: 11,
      reposts: 42,
      likes: 81,
      views: 5200,
    },
    profileMeta: {
      intro: "Diaspora commentary account",
      bio: "Commentary on South Sudan politics, conflict, and risk",
      location: "Kampala, Uganda",
      joined: "Joined February 2021",
      note: "Click here to return to post",
      following: "537 Following",
      followers: "6.7K Followers",
      website: null,
    },
  },
  {
    id: 5,
    platform: "x",
    profileName: "Govt Info Desk Jonglei",
    profileHandle: "@GovtInfoJGL",
    verified: false,
    profilePicture: "assets/profiles/pp_gov_emblem_blue.jpg",
    timestamp: "24 Apr 2026 · 13:46",
    content:
      "The public is advised to disregard fabricated reports alleging any state policy targeting civilians in Jonglei. Any temporary movement guidance relates to force protection and civilian safety during ongoing security operations.",
    media: null,
    metrics: {
      replies: 5,
      reposts: 17,
      likes: 39,
      views: 2800,
    },
    profileMeta: {
      intro: "Government-aligned account",
      bio: "Public information and state messaging on security developments",
      location: "Juba, South Sudan",
      joined: "Joined June 2022",
      note: "Click here to return to post",
      following: "284 Following",
      followers: "4.3K Followers",
      website: null,
    },
  },
  {
    id: 6,
    platform: "x",
    profileName: "Peace First Bor",
    profileHandle: "@PeaceFirstBor",
    verified: false,
    profilePicture: "assets/profiles/pp_eagle_flag_blue.jpg",
    timestamp: "24 Apr 2026 · 13:49",
    content:
      "Opposition accounts are replaying January lies to scare ppl again. No govt order against civilians. Security forces are dealing with armed elements, not communities. #PeaceFirst #Jonglei",
    media: null,
    metrics: {
      replies: 3,
      reposts: 15,
      likes: 27,
      views: 2100,
    },
    profileMeta: {
      intro: "Political commentary account",
      bio: "Commentary on stability, sovereignty, and political narratives",
      location: "Bor, South Sudan",
      joined: "Joined June 2022",
      note: "Click here to return to post",
      following: "196 Following",
      followers: "2.2K Followers",
      website: null,
    },
  },
  {
    id: 7,
    platform: "x",
    profileName: "National Stability SS",
    profileHandle: "@NationalStabilitySS",
    verified: false,
    profilePicture: "assets/profiles/pp_eagle_flag_blue.jpg",
    timestamp: "24 Apr 2026 · 13:52",
    content:
      "Do not help the panic campaign. There is no state order against civilians in Jonglei. Anti-peace actors are weaponising old January language to undermine stability. #PeaceFirst #SouthSudan",
    media: null,
    metrics: {
      replies: 4,
      reposts: 18,
      likes: 31,
      views: 2300,
    },
    profileMeta: {
      intro: "Political commentary account",
      bio: "Commentary on stability, sovereignty, and political narratives",
      location: "Juba, South Sudan",
      joined: "Joined June 2022",
      note: "Click here to return to post",
      following: "196 Following",
      followers: "2.5K Followers",
      website: null,
    },
  },
  {
    id: 8,
    platform: "facebook",
    profileName: "Bor Citizens First",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_crossedout_bluehelmet.jpg",
    timestamp: "24 April 2026 at 13:57",
    content:
      "If UNMISS knows the roads are unsafe, why do citizens hear it from voice notes first? People in Bor should go to the UN gate this afternoon and demand a clear answer.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_08.jpg",
    },
    metrics: {
      likes: 58,
      comments: 24,
      shares: 36,
    },
    profileMeta: {
      intro: "Civic advocacy page",
      bio: "Commentary on governance, sovereignty, and public accountability",
      location: "Bor, South Sudan",
      joined: "Joined May 2019",
      note: "Click here to return to post",
      friends: null,
      followers: "2.9K followers",
      work: "Civic page",
      education: null,
    },
  },
  {
    id: 9,
    platform: "facebook",
    profileName: "Jonglei Sovereignty Forum",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_crossedout_bluehelmet.jpg",
    timestamp: "24 April 2026 at 14:01",
    content:
      "No UNMISS convoy should move through our areas in silence while our families are left in fear. Communities have a right to stop them and ask where they are going.",
    media: null,
    metrics: {
      likes: 63,
      comments: 19,
      shares: 31,
    },
    profileMeta: {
      intro: "Civic advocacy page",
      bio: "Commentary on governance, sovereignty, and public accountability",
      location: "Juba / Bor",
      joined: "Joined May 2019",
      note: "Click here to return to post",
      friends: null,
      followers: "2.4K followers",
      work: "Civic page",
      education: null,
    },
  },
  {
    id: 10,
    platform: "x",
    profileName: "Jonglei Alert 24",
    profileHandle: "@JongleiAlert24",
    verified: false,
    profilePicture: "assets/profiles/pp_black_map_outline.jpg",
    timestamp: "24 Apr 2026 · 14:05",
    content:
      "UN vehicles moving again. Civilians get rumours, foreigners get warning. Remember that.",
    media: {
      type: "video",
      thumbnail: "assets/media/unmiss_post_10_thumb.jpg",
      url: "assets/media/unmiss_post_10.mp4",
    },
    metrics: {
      replies: 6,
      reposts: 13,
      likes: 21,
      views: 1800,
    },
    profileMeta: {
      intro: "Rapid alerts and rumours",
      bio: "Fast unverified alerts from around the country",
      location: "Juba, South Sudan",
      joined: "Joined November 2024",
      note: "Click here to return to post",
      following: "91 Following",
      followers: "1.1K Followers",
      website: null,
    },
  },
  {
    id: 11,
    platform: "x",
    profileName: "Jonglei Alert 24",
    profileHandle: "@JongleiAlert24",
    verified: false,
    profilePicture: "assets/profiles/pp_black_map_outline.jpg",
    timestamp: "24 Apr 2026 · 14:07",
    content:
      "Another convoy. Another statement. Another village emptying. Watch who leaves first.",
    media: null,
    metrics: {
      replies: 5,
      reposts: 12,
      likes: 18,
      views: 1650,
    },
    profileMeta: {
      intro: "Rapid alerts and rumours",
      bio: "Fast unverified alerts from around the country",
      location: "Juba, South Sudan",
      joined: "Joined November 2024",
      note: "Click here to return to post",
      following: "91 Following",
      followers: "1.1K Followers",
      website: null,
    },
  },
  {
    id: 12,
    platform: "facebook",
    profileName: "Peter Gai Kuol",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_local_man_cap_brown.jpg",
    timestamp: "24 April 2026 at 14:10",
    content:
      "Translated from Nuer:\nHearing on voice notes that boys from nearby areas are moving in the dark and marking houses. I don't know if all is true, but elders are saying keep your people close tonight.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_12_waveform.jpg",
    },
    metrics: {
      likes: 20,
      comments: 17,
      shares: 12,
    },
    profileMeta: {
      intro: "Concerned local resident",
      bio: "Posting about safety, family, and local developments",
      location: "Nyirol, South Sudan",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: "590 friends",
      followers: null,
      work: "Community member",
      education: null,
    },
  },
  {
    id: 13,
    platform: "facebook",
    profileName: "Mary Atak",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_local_teacher_grey.jpg",
    timestamp: "24 April 2026 at 14:12",
    content:
      "Anyone know what's actually happening? Ppl are posting Jan videos like it's today. My sister in Bor says everyone is scared but nobody has clear info.",
    media: null,
    metrics: {
      likes: 17,
      comments: 21,
      shares: 4,
    },
    profileMeta: {
      intro: "Concerned local resident",
      bio: "Posting about safety, family, and local developments",
      location: "Bor, South Sudan",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: "470 friends",
      followers: null,
      work: "Community member",
      education: null,
    },
  },
  {
    id: 14,
    platform: "x",
    profileName: "South Sudan Voices Abroad",
    profileHandle: "@SSVoicesAbroad",
    verified: false,
    profilePicture: "assets/profiles/pp_diaspora_flag_black.jpg",
    timestamp: "24 Apr 2026 · 14:15",
    content:
      "Communities in Jonglei cannot wait for statements while the roads empty. Local youth should organise watches tonight and protect families if the authorities fail again. #Jonglei",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_14.jpg",
    },
    metrics: {
      replies: 18,
      reposts: 39,
      likes: 88,
      views: 4700,
    },
    profileMeta: {
      intro: "Diaspora advocacy account",
      bio: "Advocating on South Sudan, accountability, and civilian protection",
      location: "Kampala, Uganda",
      joined: "Joined February 2021",
      note: "Click here to return to post",
      following: "412 Following",
      followers: "7.3K Followers",
      website: null,
    },
  },
  {
    id: 15,
    platform: "facebook",
    profileName: "St. Bakhita Youth Choir",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_church_choir_white_blue.jpg",
    timestamp: "24 April 2026 at 14:18",
    content:
      "Translated from Juba Arabic:\nFamilies have arrived tired and frightened. Please do not share old photos or invented casualty figures. If you want to help, bring water, sorghum, and soap to the church compound before sunset.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_15.jpg",
    },
    metrics: {
      likes: 24,
      comments: 6,
      shares: 8,
    },
    profileMeta: {
      intro: "Faith and community support",
      bio: "Community support, youth activities, and church notices",
      location: "Bor (hosting displaced families)",
      joined: "Joined May 2019",
      note: "Click here to return to post",
      friends: null,
      followers: "1.3K followers",
      work: "Church youth group",
      education: null,
    },
  },
  {
    id: 16,
    platform: "x",
    profileName: "Radio Nile Desk",
    profileHandle: "@RadioNileDesk",
    verified: false,
    profilePicture: "assets/profiles/pp_radio_blue_mic.jpg",
    timestamp: "24 Apr 2026 · 14:21",
    content:
      "Renewed online alarm in Jonglei is reviving memories of the inflammatory remarks reported in January. Officials deny any order against civilians, while humanitarian concern and displacement persist. #SouthSudan",
    media: null,
    metrics: {
      replies: 7,
      reposts: 17,
      likes: 51,
      views: 3400,
    },
    profileMeta: {
      intro: "Local media outlet",
      bio: "Updates on politics, security, and humanitarian developments",
      location: "Juba, South Sudan",
      joined: "Joined May 2020",
      note: "Click here to return to post",
      following: "623 Following",
      followers: "9.8K Followers",
      website: "radioniledesk.example",
    },
  },
  {
    id: 17,
    platform: "facebook",
    profileName: "Nation Pulse South Sudan",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/pp_political_banner_red.jpg",
    timestamp: "24 April 2026 at 14:24",
    content:
      "BREAKING: Sources say the December elections have been pushed back another 24 months because the government cannot control insecurity. If true, this means war first, democracy later.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_17.jpg",
    },
    metrics: {
      likes: 73,
      comments: 39,
      shares: 28,
    },
    profileMeta: {
      intro: "Breaking political rumours",
      bio: "Fast-moving political chatter, leaks, and rumours",
      location: "Juba, South Sudan",
      joined: "Joined March 2018",
      note: "Click here to return to post",
      friends: null,
      followers: "12.7K followers",
      work: "Political page",
      education: null,
    },
  },
  {
    id: 18,
    platform: "facebook",
    profileName: "South Sudan Daily Report",
    profileHandle: null,
    verified: true,
    profilePicture: "assets/profiles/pp_media_red_banner.jpg",
    timestamp: "24 April 2026 at 14:26",
    content:
      "The Minister of Information has rejected social media claims that elections were formally extended this week. Screenshots now circulating online are misleading and unverified.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_18.jpg",
    },
    metrics: {
      likes: 148,
      comments: 54,
      shares: 61,
    },
    profileMeta: {
      intro: "National media",
      bio: "Breaking national news, politics, and security coverage",
      location: "Juba, South Sudan",
      joined: "Joined April 2016",
      note: "Click here to return to post",
      friends: null,
      followers: "68K followers",
      work: "Media organization",
      education: null,
    },
  },
  {
    id: 19,
    platform: "x",
    profileName: "SS 24 Alert",
    profileHandle: "@SS24Alert",
    verified: false,
    profilePicture: "assets/profiles/pp_urgent_black_red.jpg",
    timestamp: "24 Apr 2026 · 14:28",
    content:
      "JUST IN: Opposition-linked sources allege cash was distributed in Juba for a secret mission tied to a coup plot and possible attacks on senior leaders. Residents are urged to stay alert as fears of ethnic violence grow.",
    media: {
      type: "image",
      url: "assets/media/unmiss_post_19.jpg",
    },
    metrics: {
      replies: 19,
      reposts: 41,
      likes: 88,
      views: 5300,
    },
    profileMeta: {
      intro: "Breaking political alerts",
      bio: "Breaking political rumours, leaks, and urgent alerts",
      location: "Juba, South Sudan",
      joined: "Joined September 2019",
      note: "Click here to return to post",
      following: "338 Following",
      followers: "15.5K Followers",
      website: null,
    },
  },
  {
    id: 20,
    platform: "x",
    profileName: "David K. Mwangi",
    profileHandle: "@DKMwangiPolicy",
    verified: true,
    profilePicture: "assets/profiles/pp_intl_analyst_navy.jpg",
    timestamp: "24 Apr 2026 · 14:29",
    content:
      "What stands out in today's South Sudan chatter is how local insecurity in Jonglei is being fused with national rumours about elections, elite plots, and protection failures. That mix is exactly what turns a local crisis into a national information shock.",
    media: null,
    metrics: {
      replies: 13,
      reposts: 34,
      likes: 126,
      views: 7100,
    },
    profileMeta: {
      intro: "Regional policy commentator",
      bio: "Commentary on regional politics, conflict, and information risk",
      location: "Nairobi, Kenya",
      joined: "Joined January 2018",
      note: "Click here to return to post",
      following: "1,142 Following",
      followers: "28.4K Followers",
      website: "policybriefs.example",
    },
  },
];

const postsGrid = document.getElementById("postsGrid");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authPassword");
const authError = document.getElementById("authError");
const AUTH_PASSWORD = "UNMISS";
let isUnlocked = false;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

function nl2br(text) {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

function formatNumber(value) {
  return value ?? "";
}

function renderPlatformChip(platform) {
  const label = platform === "facebook" ? "Facebook" : "X";
  return `
    <div class="platform-chip ${platform}">
      <span class="platform-dot"></span>
      <span>${label}</span>
    </div>
  `;
}

function renderVerifiedBadge(post) {
  if (!post.verified) return "";
  return `<span class="verified-badge" aria-label="Verified">✓</span>`;
}

function renderIdentity(post) {
  const handle =
    post.platform === "x" && post.profileHandle
      ? `<span class="handle">${escapeHtml(post.profileHandle)}</span>`
      : "";

  return `
    <div class="post-header profile-trigger" data-flip-trigger="true" aria-label="Show profile information">
      <img class="avatar" src="${post.profilePicture}" alt="${escapeHtml(post.profileName)} profile picture" />
      <div class="post-header-main">
        <div class="identity-row">
          <span class="display-name">${escapeHtml(post.profileName)}</span>
          ${renderVerifiedBadge(post)}
          ${handle}
        </div>
        <div class="timestamp">${escapeHtml(post.timestamp)}</div>
      </div>
    </div>
  `;
}

function renderMedia(media) {
  if (!media) return "";

  if (media.type === "image") {
    const filename = media.url.split("/").pop();
    return `
      <div class="post-media">
        <img class="media-image" src="${media.url}" alt="${escapeHtml(media.alt || "Post image")}" />
        <div class="media-footer">
          <a class="download-link" href="${media.url}" download="${filename}">Download image</a>
        </div>
      </div>
    `;
  }

  if (media.type === "video") {
    const filename = media.url.split("/").pop();
    return `
      <div class="post-media">
        <a class="video-thumb-wrap" href="${media.url}" target="_blank" rel="noopener noreferrer" aria-label="Open video">
          <img class="video-thumbnail" src="${media.thumbnail}" alt="${escapeHtml(media.alt || "Video thumbnail")}" />
          <div class="play-overlay">
            <div class="play-button">
              <div class="play-triangle"></div>
            </div>
          </div>
        </a>
        <div class="media-footer">
          <a class="download-link" href="${media.url}" download="${filename}">Download video</a>
        </div>
      </div>
    `;
  }

  return "";
}

function commentIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3v4l5.2-4H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
    </svg>
  `;
}

function likeIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1 21h4V9H1v12zM23 10a2 2 0 0 0-2-2h-6l1-4V3a2 2 0 0 0-2-2l-7 8v12h11a2 2 0 0 0 2-2l2-7v-2z"></path>
    </svg>
  `;
}

function shareIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 8a3 3 0 1 0-2.82-4H15a3 3 0 0 0 .18 1L8.91 8.09a3 3 0 0 0-1.82-.59 3 3 0 1 0 1.82 5.41l6.27 3.09A3 3 0 0 0 15 17a3 3 0 1 0 .18 1h.18a3 3 0 0 0-1.18-2.27L7.91 12.64A3 3 0 0 0 8 12a3 3 0 0 0-.09-.64l6.27-3.09A3 3 0 0 0 18 8z"></path>
    </svg>
  `;
}

function replyIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 9V5L7 12l7 7v-4.1c4.5 0 7.6 1.5 10 4.1-1-5-4-10-10-10z"></path>
    </svg>
  `;
}

function repostIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h11l-2.5-2.5L17 3l5 5-5 5-1.5-1.5L18 9H7a3 3 0 0 0 0 6h2v2H7A5 5 0 0 1 7 7zm10 0v2h-2V7h2zm0 8H6l2.5 2.5L7 19l-5-5 5-5 1.5 1.5L6 13h11a3 3 0 0 0 0-6h-2V5h2a5 5 0 0 1 0 10z"></path>
    </svg>
  `;
}

function heartIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.01 6.01 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  `;
}

function viewsIcon() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2V4h-2v13zm4 0h2V10h-2v7z"></path>
    </svg>
  `;
}

function renderFacebookMetrics(metrics) {
  return `
    <div class="metrics-row">
      <div class="metrics-left">
        <div class="fb-reactions">
          <div class="reaction-icons" aria-hidden="true">
            <span class="reaction-icon reaction-like">👍</span>
            <span class="reaction-icon reaction-love">❤</span>
          </div>
          <span>${formatNumber(metrics.likes)}</span>
        </div>
      </div>
      <div class="metrics-right">
        <span>${formatNumber(metrics.comments)} comments</span>
        <span>${formatNumber(metrics.shares)} shares</span>
      </div>
    </div>
  `;
}

function renderXMetrics(metrics) {
  return `
    <div class="metrics-row">
      <div class="metrics-left">
        <span>${formatNumber(metrics.views)} views</span>
      </div>
      <div class="metrics-right">
        <span>${formatNumber(metrics.replies)} replies</span>
        <span>${formatNumber(metrics.reposts)} reposts</span>
        <span>${formatNumber(metrics.likes)} likes</span>
      </div>
    </div>
  `;
}

function renderFacebookActions() {
  return `
    <div class="action-row facebook">
      <button class="action-btn" type="button">${likeIcon()}<span>Like</span></button>
      <button class="action-btn" type="button">${commentIcon()}<span>Comment</span></button>
      <button class="action-btn" type="button">${shareIcon()}<span>Share</span></button>
    </div>
  `;
}

function renderXActions() {
  return `
    <div class="action-row x">
      <button class="action-btn reply" type="button">${replyIcon()}<span>Reply</span></button>
      <button class="action-btn repost" type="button">${repostIcon()}<span>Repost</span></button>
      <button class="action-btn like" type="button">${heartIcon()}<span>Like</span></button>
      <button class="action-btn views" type="button">${viewsIcon()}<span>Views</span></button>
    </div>
  `;
}

function buildMetaRows(post) {
  const meta = post.profileMeta || {};
  const rows = [];

  if (post.platform === "facebook") {
    const fbFields = [
      ["Location", meta.location],
      ["Joined", meta.joined],
      ["Friends", meta.friends],
      ["Followers", meta.followers],
      ["Work", meta.work],
      ["Education", meta.education],
    ];

    fbFields.forEach(([label, value]) => {
      if (value) {
        rows.push(`
          <div class="meta-row">
            <div class="meta-label">${escapeHtml(label)}</div>
            <div class="meta-value">${escapeHtml(value)}</div>
          </div>
        `);
      }
    });
  } else {
    const xFields = [
      ["Location", meta.location],
      ["Joined", meta.joined],
      ["Following", meta.following],
      ["Followers", meta.followers],
      ["Website", meta.website],
    ];

    xFields.forEach(([label, value]) => {
      if (value) {
        rows.push(`
          <div class="meta-row">
            <div class="meta-label">${escapeHtml(label)}</div>
            <div class="meta-value">${escapeHtml(value)}</div>
          </div>
        `);
      }
    });
  }

  return rows.join("");
}

function renderProfileBack(post) {
  const meta = post.profileMeta || {};
  const handle =
    post.platform === "x" && post.profileHandle
      ? `<p>${escapeHtml(post.profileHandle)}</p>`
      : `<p>${post.platform === "facebook" ? "Facebook profile" : "X profile"}</p>`;

  return `
    <div class="post-card ${post.platform} profile-back-card">
      <div class="post-inner">
        ${renderPlatformChip(post.platform)}

        <div class="profile-back-header">
          <img class="avatar" src="${post.profilePicture}" alt="${escapeHtml(post.profileName)} profile picture" />
          <div class="profile-back-title">
            <h3>${escapeHtml(post.profileName)} ${post.verified ? renderVerifiedBadge(post) : ""}</h3>
            ${handle}
          </div>
        </div>

        ${
          meta.intro
            ? `<div class="profile-section">
                 <h4 class="profile-section-title">Profile summary</h4>
                 <p class="profile-note">${escapeHtml(meta.intro)}</p>
               </div>`
            : ""
        }

        ${
          meta.bio
            ? `<div class="profile-section">
                 <h4 class="profile-section-title">Bio</h4>
                 <p class="profile-bio">${escapeHtml(meta.bio)}</p>
               </div>`
            : ""
        }

        <div class="profile-section">
          <h4 class="profile-section-title">Profile details</h4>
          <div class="meta-list">
            ${buildMetaRows(post)}
          </div>
        </div>

        <div class="back-hint">${escapeHtml(meta.note || "Click anywhere on this card to return to the post.")}</div>
      </div>
    </div>
  `;
}

function renderFront(post) {
  const metricsHtml =
    post.platform === "facebook"
      ? renderFacebookMetrics(post.metrics)
      : renderXMetrics(post.metrics);

  const actionsHtml =
    post.platform === "facebook" ? renderFacebookActions() : renderXActions();

  return `
    <div class="flip-face front">
      <div class="post-card ${post.platform}">
        <div class="post-inner">
          ${renderPlatformChip(post.platform)}
          ${renderIdentity(post)}

          <div class="post-content">
            <p>${nl2br(post.content)}</p>
          </div>

          ${renderMedia(post.media)}

          <div class="post-divider"></div>

          ${metricsHtml}
          ${actionsHtml}
        </div>
      </div>
    </div>
  `;
}

function renderBack(post) {
  return `
    <div class="flip-face back" data-flip-back="true" aria-label="Return to post">
      ${renderProfileBack(post)}
    </div>
  `;
}

function renderPost(post) {
  return `
    <article class="grid-item">
      <div class="flip-card" data-post-id="${post.id}">
        <div class="flip-card-inner">
          ${renderFront(post)}
          ${renderBack(post)}
        </div>
      </div>
    </article>
  `;
}

function renderPosts() {
  if (!isUnlocked) return;
  postsGrid.innerHTML = posts.map(renderPost).join("");
  resizeAllGridItems();
  bindFlipEvents();
}

function setFlipCardHeight(flipCard) {
  const front = flipCard.querySelector(".flip-face.front");
  const back = flipCard.querySelector(".flip-face.back");
  const inner = flipCard.querySelector(".flip-card-inner");

  if (!front || !back || !inner) return;

  const isFlipped = flipCard.classList.contains("is-flipped");
  const activeFace = isFlipped ? back : front;

  const activeHeight = activeFace.scrollHeight;
  inner.style.height = `${activeHeight}px`;
  flipCard.style.height = `${activeHeight}px`;
}

function resizeGridItem(item) {
  const grid = document.querySelector(".posts-grid");
  const rowHeight = parseInt(
    getComputedStyle(grid).getPropertyValue("grid-auto-rows"),
    10,
  );
  const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("gap"), 10);
  const flipCard = item.querySelector(".flip-card");

  if (!flipCard) return;

  setFlipCardHeight(flipCard);

  const cardHeight = flipCard.getBoundingClientRect().height;
  const rowSpan = Math.ceil((cardHeight + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}

function resizeAllGridItems() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => resizeGridItem(item));
}

function bindFlipEvents() {
  document.querySelectorAll('[data-flip-trigger="true"]').forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const flipCard = event.currentTarget.closest(".flip-card");
      if (!flipCard) return;

      flipCard.classList.add("is-flipped");
      setFlipCardHeight(flipCard);

      const gridItem = flipCard.closest(".grid-item");
      if (gridItem) resizeGridItem(gridItem);

      setTimeout(() => {
        setFlipCardHeight(flipCard);
        if (gridItem) resizeGridItem(gridItem);
      }, 1000);
    });
  });

  document.querySelectorAll('[data-flip-back="true"]').forEach((backFace) => {
    backFace.addEventListener("click", (event) => {
      const flipCard = event.currentTarget.closest(".flip-card");
      if (!flipCard) return;

      flipCard.classList.remove("is-flipped");
      setFlipCardHeight(flipCard);

      const gridItem = flipCard.closest(".grid-item");
      if (gridItem) resizeGridItem(gridItem);

      setTimeout(() => {
        setFlipCardHeight(flipCard);
        if (gridItem) resizeGridItem(gridItem);
      }, 1000);
    });
  });
}

function clearAuthError() {
  if (authError) {
    authError.textContent = "";
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const guess = authInput?.value?.trim() ?? "";

  if (guess === AUTH_PASSWORD) {
    authInput.value = "";
    clearAuthError();
    unlockFeed();
    return;
  }

  if (authError) {
    authError.textContent = "Password incorrect. Please try again.";
  }
  authInput?.focus();
}

function unlockFeed() {
  if (isUnlocked) return;
  isUnlocked = true;
  document.body.classList.remove("auth-locked");
  if (authOverlay) {
    authOverlay.classList.add("hidden");
  }
  renderPosts();
}

function initAuth() {
  if (!authForm || !authOverlay || !authInput) {
    unlockFeed();
    return;
  }

  authForm.addEventListener("submit", handleAuthSubmit);
  authInput.focus();
}

window.addEventListener("load", initAuth);
window.addEventListener("resize", resizeAllGridItems);

document.addEventListener(
  "load",
  (event) => {
    if (
      event.target.tagName === "IMG" &&
      (event.target.classList.contains("avatar") ||
        event.target.classList.contains("media-image") ||
        event.target.classList.contains("video-thumbnail"))
    ) {
      resizeAllGridItems();
    }
  },
  true,
);
