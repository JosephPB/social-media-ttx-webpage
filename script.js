const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Mina Haddid",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/castle.jpg",
    timestamp: "14 April 2026 at 07:58",
    content:
      "Translated from Arabic:\nDoes anyone know what is happening near Al-Rafid this morning? \nJust saw UNDOF vehicles driving toward the area and then not long after that there were Israeli military vehicles moving along the road near the fields \nMy cousin said drones were flying overhead last night too.\nI hope things don't get bad again.",
    media: null,
    metrics: {
      likes: "10",
      comments: 1,
      shares: 6,
    },
    profileMeta: {
      intro: "Local resident following developments in the area",
      bio: "Posts local observations and community updates. Interested in safety, transport disruptions, and public information.",
      location: "Golan Heights",
      joined: "Joined March 2019",
      friends: "482 friends",
      followers: "1.1K followers",
      work: "Community volunteer",
      education: "Studied at Damascus University",
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 2,
    platform: "x",
    profileName: "Daniel Kareem",
    profileHandle: "@danielk_reports",
    verified: true,
    profilePicture: "assets/profiles/man_looking_out.jpg",
    timestamp: "14 Apr 2026 · 08:46",
    content:
      "Seeing people post about UNDOF vehicles heading toward Al-Rafid this morning.\nA few minutes later someone said Israeli vehicles were also seen nearby.\nNot sure what’s going on but it feels like something is building again 😬\n#Quneitra #Syria",
    media: {
      type: "image",
      url: "assets/media/tank_with_flag.jpg",
    },
    metrics: {
      replies: 12,
      reposts: 23,
      likes: 76,
      views: "258",
    },
    profileMeta: {
      intro: "Monitoring local developments and online claims",
      bio: "Open-source watcher focused on conflict narratives, visual verification, and how claims spread across platforms.",
      location: "Beirut / Southern Syria",
      joined: "Joined May 2021",
      following: "389 Following",
      followers: "24.8K Followers",
      website: "golanwatch.com",
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 3,
    platform: "facebook",
    profileName: "Golan News",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/mount.webp",
    timestamp: "14 April 2026 at 10:41",
    content:
      "🚨 Residents in southern Quneitra report that UNDOF peacekeepers are allowing Israeli occupation forces to pass through the buffer zone without any resistance.\nLocal sources say Israeli military vehicles crossed near Al-Rafid while UN vehicles remained nearby but did not intervene.\nPeople in the area say this is not the first time UN forces have watched silently while Israeli troops enter Syrian territory.\nThrough these repeated incursions, Israel continues to violate the ceasefire agreement while the international community remains silent.\nMany residents are asking: what is the role of UNDOF if violations continue unchecked?",
    media: null,
    metrics: {
      likes: 85,
      comments: 10,
      shares: 37,
    },
    profileMeta: {
      intro: "Local news of the Golan Heights",
      bio: "News outlets covering 24/7 news in the occupied Golan",
      location: "Golan Heights",
      joined: "Joined August 2017",
      friends: null,
      followers: "1.2k followers",
      work: "Small business owner",
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 4,
    platform: "x",
    profileName: "Leila S.",
    profileHandle: "@LeilaSignals",
    verified: true,
    profilePicture: "assets/profiles/plateau.jpeg",
    timestamp: "12 Apr 2026 · 12:51",
    content:
      "Translated from Hebrew:\nResidents in southern Quneitra say UNDOF peacekeepers stood by while Israeli forces crossed near Al-Rafid earlier today.\nLocal accounts claim UN vehicles were present but did not intervene.\nNo independent confirmation yet.\n#UNDOF #Syria #Quneitra",
    media: null,
    metrics: {
      replies: 13,
      reposts: 39,
      likes: 211,
      views: "9,803",
    },
    profileMeta: {
      intro: "Concerned citizen",
      bio: "Posts about my daughter and traditional family life",
      location: "My family",
      joined: "Joined January 2023",
      following: "198 Following",
      followers: "5,420 Followers",
      website: null,
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 5,
    platform: "facebook",
    profileName: "Shepherd Lookout",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/goat.png",
    timestamp: "14 April 2026 at 11:07",
    content:
      "Translated from Arabic:\nResidents in southern Quneitra report that UNDOF peacekeepers are allowing Israeli occupation forces to pass through the buffer zone without any resistance.\nLocal sources say Israeli military vehicles crossed near Al-Rafid while UN vehicles remained nearby but did not intervene.\nPeople in the area say this is not the first time UN forces have watched silently while Israeli troops enter Syrian territory.\nThrough these repeated incursions, Israel continues to violate the ceasefire agreement while the international community remains silent.\nMany residents are asking: what is the role of UNDOF if violations continue unchecked?",
    media: null,
    metrics: {
      likes: 12,
      comments: 2,
      shares: 5,
    },
    profileMeta: {
      intro: "Public messaging on local issues of concern",
      bio: "Interested in farming news, and issues of local people",
      location: "GH, Syria",
      joined: "Joined November 2016",
      friends: "913 friends",
      followers: "1.8K followers",
      education: null,
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 6,
    platform: "x",
    profileName: "Ami Al-Binh",
    profileHandle: "@amialbinh14578",
    verified: true,
    profilePicture: "assets/profiles/waterfall.jpg",
    timestamp: "15 Apr 2026 · 19:23",
    content:
      "Translated from Arabic:\nNow seeing posts claiming UNDOF patrols are coordinating movements with Israeli forces near the buffer zone.\nNot sure if this is true but people here are sharing it everywhere tonight.\nIf anyone has reliable info please share.\n#UNDOF #Syria",
    media: null,
    metrics: {
      replies: 5,
      reposts: 6,
      likes: 34,
      views: "122",
    },
    profileMeta: {
      intro: "Local citizen",
      bio: "Love my family, love my community, love my golan",
      location: null,
      joined: "Joined September 2020",
      following: "122 Following",
      followers: "187 Followers",
      website: null,
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 7,
    platform: "facebook",
    profileName: "Watching the Golan",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/plateau.jpeg",
    timestamp: "14 April 2026 at 12:19",
    content:
      "🚨 Residents in southern Quneitra report that UNDOF peacekeepers are allowing Israeli occupation forces to pass through the buffer zone without any resistance.\nLocal sources say Israeli military vehicles crossed near Al-Rafid while UN vehicles remained nearby but did not intervene.\nPeople in the area say this is not the first time UN forces have watched silently while Israeli troops enter Syrian territory.\nMany residents are asking: what is the role of UNDOF if violations continue unchecked?",
    media: null,
    metrics: {
      likes: 790,
      comments: 102,
      shares: 347,
    },
    profileMeta: {
      intro: "Messaging on regional politics",
      bio: "Keeping an eye on the Golan and the rest of Israel",
      location: "Jerusalem/Golan, Israel",
      joined: "Joined November 2016",
      friends: "913 friends",
      followers: "24.8K followers",
      education: null,
      note: "Click anywhere on this card to return to the post.",
    },
  },
  {
    id: 8,
    platform: "facebook",
    profileName: "Syrian News",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/syria_flag.webp",
    timestamp: "14 April 2026 at 17:02",
    content:
      "UNDOF patrol activity observed in Quneitra countryside\nResidents reported seeing a United Nations Disengagement Observer Force (UNDOF) patrol moving through several locations in southern Quneitra earlier today.\nUNDOF regularly conducts patrols to monitor the ceasefire agreement between Syria and Israel in the area of separation.\nLocal sources also reported Israeli military activity in nearby areas earlier in the day, though no official statements have been issued regarding the incidents.\nUNDOF’s mandate includes observing and reporting any violations of the 1974 disengagement agreement.",
    media: null,
    metrics: {
      likes: "1,689",
      comments: 206,
      shares: 587,
    },
    profileMeta: {
      intro: "National Syrian news outlet",
      bio: "Keeping citizens informed through thorough journalism",
      location: "Damascus",
      joined: "Joined April 2016",
      friends: null,
      followers: "102.8K followers",
      education: null,
      note: "Click anywhere on this card to return to the post.",
    },
  },
];

const postsGrid = document.getElementById("postsGrid");

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

window.addEventListener("load", renderPosts);
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
