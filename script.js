const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Maya Haddad",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/maya.jpg",
    timestamp: "7 March 2026 at 09:14",
    content:
      "I passed the road near the crossing this morning and saw a large convoy again. People need clear information because rumours are spreading faster than facts. Has anyone actually confirmed what they were doing there?",
    media: {
      type: "image",
      url: "assets/media/convoy.jpg",
      alt: "Convoy on a road"
    },
    metrics: {
      likes: "1.2K",
      comments: 184,
      shares: 92
    },
    profileMeta: {
      intro: "Local resident following developments in the area",
      bio: "Posts local observations and community updates. Interested in safety, transport disruptions, and public information.",
      location: "Quneitra countryside",
      joined: "Joined March 2019",
      friends: "482 friends",
      followers: "1.1K followers",
      work: "Community volunteer",
      education: "Studied at Damascus University",
      note: "Click anywhere on this card to return to the post."
    }
  },
  {
    id: 2,
    platform: "x",
    profileName: "Daniel Kareem",
    profileHandle: "@danielk_reports",
    verified: true,
    profilePicture: "assets/profiles/daniel.jpg",
    timestamp: "7 Mar 2026 · 10:02",
    content:
      "Residents in the area are posting conflicting claims this morning. Some say this is routine movement, others are framing it as something much bigger. Worth being careful before amplifying unverified clips.",
    media: {
      type: "video",
      url: "assets/media/clip.mp4",
      thumbnail: "assets/media/clip-thumb.jpg",
      alt: "Video thumbnail showing a street scene"
    },
    metrics: {
      replies: 46,
      reposts: 71,
      likes: 502,
      views: "18.4K"
    },
    profileMeta: {
      intro: "Monitoring local developments and online claims",
      bio: "Open-source watcher focused on conflict narratives, visual verification, and how claims spread across platforms.",
      location: "Beirut / Southern Syria desk",
      joined: "Joined May 2021",
      following: "389 Following",
      followers: "24.8K Followers",
      website: "fieldwatch.example",
      note: "Click anywhere on this card to return to the post."
    }
  },
  {
    id: 3,
    platform: "facebook",
    profileName: "Rami Nasser",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/rami.jpg",
    timestamp: "7 March 2026 at 11:47",
    content:
      "Genuinely asking: why does every second clip online come with a dramatic caption and no context? My neighbours are already repeating things as if they are confirmed. Please check before sharing.",
    media: null,
    metrics: {
      likes: 428,
      comments: 67,
      shares: 21
    },
    profileMeta: {
      intro: "Interested in local news and media literacy",
      bio: "Mostly shares family photos and local commentary. Occasionally posts about community concerns and rumours spreading online.",
      location: "Near Khan Arnabah",
      joined: "Joined August 2017",
      friends: "731 friends",
      followers: "640 followers",
      work: "Small business owner",
      note: "Click anywhere on this card to return to the post."
    }
  },
  {
    id: 4,
    platform: "x",
    profileName: "Leila S.",
    profileHandle: "@LeilaSignals",
    verified: false,
    profilePicture: "assets/profiles/leila.jpg",
    timestamp: "7 Mar 2026 · 12:21",
    content:
      "This same screenshot is now circulating on multiple channels with slightly different wording. That usually tells you people are copy-pasting rather than reporting what they actually saw.",
    media: {
      type: "image",
      url: "assets/media/checkpoint.jpg",
      alt: "Checkpoint image"
    },
    metrics: {
      replies: 13,
      reposts: 39,
      likes: 211,
      views: "9,803"
    },
    profileMeta: {
      intro: "Tracks cross-platform narrative spread",
      bio: "Posts about repetition patterns, coordination signals, and visual markers of copied content.",
      location: "Middle East monitoring network",
      joined: "Joined January 2023",
      following: "198 Following",
      followers: "5,420 Followers",
      website: "signalsdesk.example",
      note: "Click anywhere on this card to return to the post."
    }
  },
  {
    id: 5,
    platform: "facebook",
    profileName: "Nadine Khoury",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/nadine.jpg",
    timestamp: "7 March 2026 at 13:06",
    content:
      "The official page said there would be community engagement this afternoon, but half the comments underneath are talking about completely unrelated clips. This is exactly how confusion spreads during tense periods.",
    media: null,
    metrics: {
      likes: 684,
      comments: 93,
      shares: 37
    },
    profileMeta: {
      intro: "Follows local institutions and public messaging",
      bio: "Interested in how official communication is received online and how unrelated rumours can quickly dominate discussion threads.",
      location: "Damascus",
      joined: "Joined November 2016",
      friends: "913 friends",
      followers: "1.8K followers",
      education: "Studied media and communications",
      note: "Click anywhere on this card to return to the post."
    }
  },
  {
    id: 6,
    platform: "x",
    profileName: "FieldWatch Updates",
    profileHandle: "@fieldwatchdesk",
    verified: true,
    profilePicture: "assets/profiles/fieldwatch.jpg",
    timestamp: "7 Mar 2026 · 13:48",
    content:
      "News: mission representatives conducted a scheduled patrol and local liaison activity earlier today. Separate viral claims alleging a confrontation are not substantiated by the material currently available online.",
    media: null,
    metrics: {
      replies: 25,
      reposts: 88,
      likes: 340,
      views: "22.1K"
    },
    profileMeta: {
      intro: "News-style account posting rapid updates",
      bio: "Provides short-form updates on developments, open-source reporting, and official statements relevant to the operating environment.",
      location: "Regional desk",
      joined: "Joined September 2020",
      following: "122 Following",
      followers: "41.2K Followers",
      website: "updatesdesk.example",
      note: "Click anywhere on this card to return to the post."
    }
  }
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
  const handle = post.platform === "x" && post.profileHandle
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
      ["Education", meta.education]
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
      ["Website", meta.website]
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
  const handle = post.platform === "x" && post.profileHandle
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
    post.platform === "facebook"
      ? renderFacebookActions()
      : renderXActions();

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

function resizeGridItem(item) {
  const grid = document.querySelector(".posts-grid");
  const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"), 10);
  const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("gap"), 10);
  const content = item.querySelector(".flip-card");

  const rowSpan = Math.ceil((content.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
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
      setTimeout(resizeAllGridItems, 50);
      setTimeout(resizeAllGridItems, 600);
      setTimeout(resizeAllGridItems, 1050);
    });
  });

  document.querySelectorAll('[data-flip-back="true"]').forEach((backFace) => {
    backFace.addEventListener("click", (event) => {
      const flipCard = event.currentTarget.closest(".flip-card");
      if (!flipCard) return;
      flipCard.classList.remove("is-flipped");
      setTimeout(resizeAllGridItems, 50);
      setTimeout(resizeAllGridItems, 600);
      setTimeout(resizeAllGridItems, 1050);
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
      (
        event.target.classList.contains("avatar") ||
        event.target.classList.contains("media-image") ||
        event.target.classList.contains("video-thumbnail")
      )
    ) {
      resizeAllGridItems();
    }
  },
  true
);
