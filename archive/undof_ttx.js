const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Yarmouk Valley Updates",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/plateau.jpeg",
    timestamp: "11 March 2026 at 14:21",
    content:
      "Translated from Arabic:\nResidents near the separation line say Israeli occupation forces are entering and strengthening positions in the occupied Golan Heights while UNDOF vehicles are present nearby.\nSeveral witnesses say the military vehicles used roads close to the buffer area and passed without any resistance.\nPeople are asking whether the mission is simply watching these movements happen.",
    media: {
      type: "image",
      url: "assets/media/tank_with_flag.jpg",
    },
    metrics: {
      likes: 94,
      comments: 12,
      shares: 41,
    },
    profileMeta: {
      intro: "Local citizen updates",
      bio: "Posting local developments affecting our communities",
      location: "Quneitra countryside",
      joined: "Joined May 2018",
      note: "Click here to return to post",
      friends: "784 friends",
      followers: "2.1K followers",
      work: "Local volunteer",
      education: null,
    },
  },
  {
    id: 2,
    platform: "facebook",
    profileName: "Voice of Quneitra",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/quneitra.jpg",
    timestamp: "11 March 2026 at 14:22",
    content:
      "BREAKING:\nResidents near the separation line say Israeli occupation forces are entering and strengthening positions in the occupied Golan Heights while UNDOF vehicles are present nearby.\nSeveral witnesses say the military vehicles used roads close to the buffer area and passed without any resistance.\nQuestions are growing over the role of the mission as these movements continue.",
    media: null,
    metrics: {
      likes: 133,
      comments: 24,
      shares: 58,
    },
    profileMeta: {
      intro: "Local media page",
      bio: "Community reporting on security developments in the Golan",
      location: "Quneitra",
      joined: "Joined July 2016",
      note: "Click here to return to post",
      friends: null,
      followers: "12.4K followers",
      work: "Journalist collective",
      education: null,
    },
  },
  {
    id: 3,
    platform: "facebook",
    profileName: "Shepherd Watch",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/goat.png",
    timestamp: "11 March 2026 at 14:23",
    content:
      "Translated from Arabic:\nResidents near the separation line say Israeli occupation forces are entering and strengthening positions in the occupied Golan Heights while UNDOF vehicles are present nearby.\nSeveral witnesses say the military vehicles used roads close to the buffer area and passed without any resistance.\nFarmers here keep asking why this keeps happening in front of everyone.",
    media: null,
    metrics: {
      likes: 18,
      comments: 4,
      shares: 6,
    },
    profileMeta: {
      intro: "Concerned citizen",
      bio: "Interested in farming life and local issues",
      location: "Southern Syria",
      joined: "Joined September 2017",
      note: "Click here to return to post",
      friends: "512 friends",
      followers: "903 followers",
      work: "Farmer",
      education: null,
    },
  },
  {
    id: 4,
    platform: "x",
    profileName: "Levant Observer",
    profileHandle: "@levantobserver",
    verified: false,
    profilePicture: "assets/profiles/mount.webp",
    timestamp: "11 Mar 2026 · 14:23",
    content:
      "Reports circulating locally that Israeli occupation forces are entering and strengthening positions in the occupied Golan Heights while UNDOF vehicles are present nearby.\nSeveral witnesses say the military vehicles used roads close to the buffer area and passed without any resistance.\n#UNDOF #Golan #Syria",
    media: {
      type: "image",
      url: "assets/media/undof_merkava.png",
    },
    metrics: {
      replies: 21,
      reposts: 38,
      likes: 119,
      views: 2400,
    },
    profileMeta: {
      intro: "Monitoring developments",
      bio: "Tracking regional narratives and open source reporting",
      location: "Beirut",
      joined: "Joined April 2020",
      note: "Click here to return to post",
      following: "321 Following",
      followers: "8.4K Followers",
      website: null,
    },
  },
  {
    id: 5,
    platform: "facebook",
    profileName: "Ahmad Darwish",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/man_looking_out.jpg",
    timestamp: "11 March 2026 at 14:24",
    content:
      "Translated from Arabic:\nI just passed near the fields and saw Israeli military vehicles heading up toward the hills...\nFirst helicopters and now this?!",
    media: null,
    metrics: {
      likes: 9,
      comments: 1,
      shares: 3,
    },
    profileMeta: {
      intro: "Local resident",
      bio: "Sharing what I see in the area",
      location: "Quneitra village",
      joined: "Joined January 2021",
      note: "Click here to return to post",
      friends: "215 friends",
      followers: "341 followers",
      work: null,
      education: null,
    },
  },
  {
    id: 6,
    platform: "x",
    profileName: "Noa Levi",
    profileHandle: "@noalevi_IL",
    verified: true,
    profilePicture: "assets/profiles/jerusalem.jpg",
    timestamp: "11 Mar 2026 · 14:25",
    content:
      "Translated from Hebrew:\nIDF forces are securing positions near the Golan today after threats from across the border.\nIf UNDOF cannot protect the area then Israel has to act to protect civilians in the region",
    media: null,
    metrics: {
      replies: 8,
      reposts: 15,
      likes: 86,
      views: 5200,
    },
    profileMeta: {
      intro: "Security analyst",
      bio: "Regional security commentary",
      location: "Tel Aviv",
      joined: "Joined March 2019",
      note: "Click here to return to post",
      following: "102 Following",
      followers: "4.0K Followers",
      website: null,
    },
  },
  {
    id: 7,
    platform: "facebook",
    profileName: "Marwan Al-Hassan",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/daraa.avif",
    timestamp: "11 March 2026 at 14:27",
    content:
      "Translated from Arabic:\nPeople are saying Israeli forces are even attacking Lebanon from Syrian territory now. Both on the ground and in the air.\nUNDOF vehicles were seen earlier on the same roads.\nAre they just watching this or are they helping make it possible?",
    media: {
      type: "image",
      url: "assets/media/idf_white_car.webp",
    },
    metrics: {
      likes: 22,
      comments: 6,
      shares: 7,
    },
    profileMeta: {
      intro: "Concerned citizen",
      bio: "Following regional events and local security concerns",
      location: "Daraa",
      joined: "Joined June 2018",
      note: "Click here to return to post",
      friends: "621 friends",
      followers: "740 followers",
      work: null,
      education: null,
    },
  },
  {
    id: 8,
    platform: "x",
    profileName: "GeoWatchEU",
    profileHandle: "@GeoWatchEU",
    verified: false,
    profilePicture: "assets/profiles/israel_eu_flag.jpeg",
    timestamp: "11 Mar 2026 · 14:28",
    content:
      "From what we can see online, Israeli forces appear to be reinforcing positions in the Golan while UNDOF remains present nearby.\nSome accounts are saying the mission is useless and that the IDF had to step in to support Syrians, just as it says it is supporting the people of Iran.",
    media: {
      type: "image",
      url: "assets/media/un_convoy.png",
    },
    metrics: {
      replies: 13,
      reposts: 31,
      likes: 94,
      views: 6100,
    },
    profileMeta: {
      intro: "International observer",
      bio: "Watching geopolitical developments",
      location: "Amsterdam",
      joined: "Joined November 2022",
      note: "Click here to return to post",
      following: "582 Following",
      followers: "2.2K Followers",
      website: null,
    },
  },
  {
    id: 9,
    platform: "facebook",
    profileName: "Hassan Abu Khaled",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/syrian_gunman.webp",
    timestamp: "11 March 2026 at 14:30",
    content:
      "Translated from Arabic:\nIf Israeli forces are attacking Lebanon from Syrian land and UNDOF is standing by, people here cannot stay silent forever...\nEveryone sees the same military vehicles moving again today",
    media: null,
    metrics: {
      likes: 44,
      comments: 12,
      shares: 15,
    },
    profileMeta: {
      intro: "Local resident",
      bio: "Community discussions and local concerns",
      location: "Quneitra",
      joined: "Joined October 2019",
      note: "Click here to return to post",
      friends: "321 friends",
      followers: "504 followers",
      work: null,
      education: null,
    },
  },
  {
    id: 10,
    platform: "x",
    profileName: "David Cohen",
    profileHandle: "@cohen_david",
    verified: false,
    profilePicture: "assets/profiles/israel_golan.jpg",
    timestamp: "11 Mar 2026 · 14:32",
    content:
      "If UNDOF cannot secure the border areas then the IDF has every right to step in and protect civilians.\nThe region cannot depend on ineffective peacekeeping forever!\nIsrael is doing what others will not.",
    media: null,
    metrics: {
      replies: 27,
      reposts: 48,
      likes: 211,
      views: 8800,
    },
    profileMeta: {
      intro: "Policy commentator",
      bio: "Discussing security issues in the region",
      location: "Jerusalem",
      joined: "Joined August 2018",
      note: "Click here to return to post",
      following: "231 Following",
      followers: "6.8K Followers",
      website: null,
    },
  },
  {
    id: 11,
    platform: "facebook",
    profileName: "National Syria News",
    profileHandle: null,
    verified: true,
    profilePicture: "assets/profiles/syria_flag.webp",
    timestamp: "11 March 2026 at 14:34",
    content:
      "Developing:\nSyrian sources report Israeli forces reinforcing positions in the occupied Golan Heights while UNDOF patrols operate in nearby sectors.\nReports circulating online also claim the forces are using Syrian territory to stage attacks toward Lebanon.",
    media: null,
    metrics: {
      likes: 870,
      comments: 203,
      shares: 401,
    },
    profileMeta: {
      intro: "National media",
      bio: "24-hour national news coverage",
      location: "Damascus",
      joined: "Joined March 2015",
      note: "Click here to return to post",
      friends: null,
      followers: "310K followers",
      work: "Media organization",
      education: null,
    },
  },
  {
    id: 12,
    platform: "facebook",
    profileName: "Syria Live Updates",
    profileHandle: null,
    verified: true,
    profilePicture: "assets/profiles/syrian_live_updates.png",
    timestamp: "11 March 2026 at 14:35",
    content:
      "Breaking:\nAs the online narrative intensifies, some posts are now openly accusing UNDOF of enabling Israeli military movements linked to alleged attacks on Lebanon.\nOther posts are starting to call for action not only against the occupation forces but also against UN personnel present in the area.",
    media: null,
    metrics: {
      likes: 650,
      comments: 144,
      shares: 276,
    },
    profileMeta: {
      intro: "National media",
      bio: "Rapid updates on political and security developments",
      location: "Damascus",
      joined: "Joined September 2016",
      note: "Click here to return to post",
      friends: null,
      followers: "188K followers",
      work: "Media network",
      education: null,
    },
  },
  {
    id: 13,
    platform: "x",
    profileName: "GlobalWorldNews",
    profileHandle: "@globalworldnews",
    verified: true,
    profilePicture: "assets/profiles/world.avif",
    timestamp: "11 Mar 2026 · 14:39",
    content:
      "International media reports rising online claims that Israeli forces are reinforcing positions in the Golan while UNDOF patrols operate nearby.\nSome posts allege the forces are using Syrian territory for strikes toward Lebanon, though these claims remain unverified.",
    media: null,
    metrics: {
      replies: 54,
      reposts: 82,
      likes: 401,
      views: 27000,
    },
    profileMeta: {
      intro: "International newsroom",
      bio: "Click here to return to post",
      location: "London",
      joined: "Joined January 2012",
      note: "Click here to return to post",
      following: "1002 Following",
      followers: "1M Followers",
      website: "globalworldnews.com",
    },
  },
  {
    id: 14,
    platform: "facebook",
    profileName: "Frontline Watch Syria",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/syria_watch.png",
    timestamp: "11 March 2026 at 14:35",
    content:
      "Translated from Arabic:\nPeople here say Israeli occupation forces are moving equipment through the Golan while UNDOF patrols are nearby.\nIf the mission sees this and does nothing, what is its purpose?",
    media: null,
    metrics: {
      likes: 64,
      comments: 14,
      shares: 22,
    },
    profileMeta: {
      intro: "Regional monitoring",
      bio: "Following developments in Syria and the wider region. Sharing updates people should see.",
      location: "Southern Syria",
      joined: "Joined March 2021",
      note: "Click here to return to post",
      friends: "403 friends",
      followers: "1.3K followers",
      work: null,
      education: null,
    },
  },
  {
    id: 15,
    platform: "x",
    profileName: "FrontlineUpdates",
    profileHandle: "@FrontlineUpdates",
    verified: false,
    profilePicture: "assets/profiles/syria_watch.png",
    timestamp: "11 Mar 2026 · 14:36",
    content:
      "Observers in southern Syria claim Israeli forces are strengthening positions in the Golan Heights while UNDOF patrols remain active in nearby sectors.\nMany locals say the movements are happening in areas regularly monitored by the mission",
    media: null,
    metrics: {
      replies: 16,
      reposts: 29,
      likes: 87,
      views: 3100,
    },
    profileMeta: {
      intro: "Regional monitoring",
      bio: "Following developments across Syria and the region. Sharing updates people should know.",
      location: "Southern Syria",
      joined: "Joined May 2022",
      note: "Click here to return to post",
      following: "512 Following",
      followers: "1.7K Followers",
      website: null,
    },
  },
  {
    id: 16,
    platform: "facebook",
    profileName: "Abu Kareem Quneitra",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/syria_tank.jpg",
    timestamp: "11 March 2026 at 14:37",
    content:
      "Translated from Arabic:\nIf Israeli forces are using Syrian land to attack Lebanon and UNDOF is just watching, people here cannot accept this forever!\nEveryone sees the same vehicles moving again today",
    media: {
      type: "video",
      thumbnail: "assets/media/tank_movie_thumbnail.png",
      url: "assets/media/tank_movie.mp4",
    },
    metrics: {
      likes: 51,
      comments: 18,
      shares: 20,
    },
    profileMeta: {
      intro: "Local resident",
      bio: "Posting local concerns and community discussion",
      location: "Quneitra countryside",
      joined: "Joined July 2019",
      note: "Click here to return to post",
      friends: "614 friends",
      followers: "870 followers",
      work: null,
      education: null,
    },
  },
  {
    id: 17,
    platform: "x",
    profileName: "GlobalSecurityView",
    profileHandle: "@GlobSecView",
    verified: false,
    profilePicture: "assets/profiles/nato.webp",
    timestamp: "11 Mar 2026 · 14:38",
    content:
      "Strange situation developing in southern Syria.\nSome accounts are now saying UNDOF is useless and that the IDF had to step in to support Syrians, just as it says it is supporting the people of Iran.\nOthers are linking this to alleged attacks on Lebanon from Syrian territory.",
    media: null,
    metrics: {
      replies: 19,
      reposts: 33,
      likes: 121,
      views: 5400,
    },
    profileMeta: {
      intro: "Geopolitical commentary",
      bio: "Tracking conflicts and international security developments worldwide",
      location: "Prague",
      joined: "Joined October 2023",
      note: "Click here to return to post",
      following: "781 Following",
      followers: "3.6K Followers",
      website: null,
    },
  },
];

const postsGrid = document.getElementById("postsGrid");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authPassword");
const authError = document.getElementById("authError");
const AUTH_PASSWORD = "UNDOF";
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
