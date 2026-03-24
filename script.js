const posts = [
  {
    id: 1,
    platform: "facebook",
    profileName: "Mariam Saab",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/man_looking_out.jpg",
    timestamp: "25 March 2026 at 15:16",
    content:
      "Translated from Arabic:\nPeople in the south are asking the same question today: if UNIFIL patrols use these roads every day, how are Hezbollah positions still growing beside them?\nLike UNRWA and Hamas in Gaza - they watch, they deny, then ask donors for more money. Remember the tunnels??\nNo more funding for agencies that protect armed groups.",
    media: {
      type: "video",
      thumbnail: "assets/media/unifil_tunnels_thumbnail.png",
      url: "assets/media/unifil_tunnels.mp4",
    },
    metrics: {
      likes: 47,
      comments: 18,
      shares: 29,
    },
    profileMeta: {
      intro: "Concerned local citizen",
      bio: "Concerned parent and community volunteer",
      location: "Tyre District, Lebanon",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: "642 friends",
      followers: "1.1K followers",
      work: "Small business owner",
      education: null,
    },
  },
  {
    id: 2,
    platform: "facebook",
    profileName: "Rana Khoury",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/man_looking_out.jpg",
    timestamp: "25 March 2026 at 15:18",
    content:
      "Translated from Arabic:\nPeople in the south are asking the same thing today: if UNIFIL patrols are on these roads all the time, how are Hezbollah positions still expanding next to them?\nMany here compare it with UNRWA and Hamas in Gaza - they see, they deny, then ask donors for more money.\nStop funding agencies that cover for armed groups.",
    media: null,
    metrics: {
      likes: 39,
      comments: 11,
      shares: 24,
    },
    profileMeta: {
      intro: "Concerned local citizen",
      bio: "Concerned parent and community volunteer",
      location: "Bint Jbeil area, Lebanon",
      joined: "Joined August 2020",
      note: "Click here to return to post",
      friends: "618 friends",
      followers: "980 followers",
      work: "Community volunteer",
      education: null,
    },
  },
  {
    id: 3,
    platform: "x",
    profileName: "South Border Bulletin",
    profileHandle: "@SouthBorderLB",
    verified: false,
    profilePicture: "assets/profiles/plateau.jpeg",
    timestamp: "25 Mar 2026 · 15:20",
    content:
      "BREAKING:\nResidents in south Lebanon are asking how Hezbollah infrastructure keeps expanding in areas regularly crossed by UNIFIL patrols.\nThey compare UNIFIL in Lebanon with UNRWA in Gaza, accusing both of shielding armed factions while asking donors to keep paying.\n#Lebanon #UNIFIL #UNRWA",
    media: null,
    metrics: {
      replies: 22,
      reposts: 41,
      likes: 173,
      views: 6300,
    },
    profileMeta: {
      intro: "Local media outlet",
      bio: "Fast updates from south Lebanon",
      location: "Nabatieh, Lebanon",
      joined: "Joined May 2021",
      note: "Click here to return to post",
      following: "184 Following",
      followers: "7.2K Followers",
      website: "southborderlb.example",
    },
  },
  {
    id: 4,
    platform: "x",
    profileName: "Eyal Bar-On",
    profileHandle: "@EyalPolicyIL",
    verified: true,
    profilePicture: "assets/profiles/israeli_security_view.png",
    timestamp: "25 Mar 2026 · 15:24",
    content:
      "Translated from Hebrew:\nUNIFIL failed twice: it did not stop Hezbollah and it did not stop the IDF from having to enter Lebanon.\nAfter the shell that hit the Ghanaian base, everyone can see how brittle the mission is.\nUNIFIL should both be defunded and rebuilt from zero.",
    media: null,
    metrics: {
      replies: 56,
      reposts: 88,
      likes: 521,
      views: 18400,
    },
    profileMeta: {
      intro: "Security commentator",
      bio: "Regional security analysis from Israel",
      location: "Tel Aviv, Israel",
      joined: "Joined February 2019",
      note: "Click here to return to post",
      following: "603 Following",
      followers: "21.4K Followers",
      website: null,
    },
  },
  {
    id: 5,
    platform: "facebook",
    profileName: "Nikos Varelis",
    profileHandle: null,
    verified: false,
    profilePicture: "assets/profiles/israel_eu_flag.jpeg",
    timestamp: "25 March 2026 at 15:31",
    content:
      "UNIFIL is useless. UNRWA is useless.\nIf Israel had not moved, Hezbollah would keep Lebanon hostage and Hamas would keep Gaza hostage. The same way pressure is helping people in Iran try to breathe.\nWhy are Europeans still paying for UN?\nIt's like they're working with the terrorists...",
    media: {
      type: "image",
      url: "assets/media/unifil_hzb_flag.jpeg",
    },
    metrics: {
      likes: 68,
      comments: 22,
      shares: 31,
    },
    profileMeta: {
      intro: "Citizen commentator",
      bio: "Following world events from abroad",
      location: "Limassol, Cyprus",
      joined: "Joined January 2018",
      note: "Click here to return to post",
      friends: "447 friends",
      followers: "1.5K followers",
      work: "Shipping clerk",
      education: null,
    },
  },
  {
    id: 6,
    platform: "x",
    profileName: "Layth_1978",
    profileHandle: "@Layth_1978",
    verified: false,
    profilePicture: "assets/profiles/hzb_flag.jpg",
    timestamp: "25 Mar 2026 · 15:34",
    content:
      "Translated from Arabic:\nWhen the occupation forces move and the blue helmets use the same roads, people here stop seeing the difference.\nIf UNIFIL keeps acting like an occupation force, we will confront it the same way.\n#SouthLebanon",
    media: {
      type: "image",
      url: "assets/media/idf_white_car.webp",
    },
    metrics: {
      replies: 39,
      reposts: 67,
      likes: 244,
      views: 9200,
    },
    profileMeta: {
      intro: "Local resident",
      bio: "Posting what people are saying in the south",
      location: "Tyre, Lebanon",
      joined: "Joined November 2023",
      note: "Click here to return to post",
      following: "311 Following",
      followers: "2.9K Followers",
      website: null,
    },
  },
  {
    id: 7,
    platform: "facebook",
    profileName: "Lebanon National Report",
    profileHandle: null,
    verified: true,
    profilePicture: "assets/profiles/lebanon_flag.jpg",
    timestamp: "25 March 2026 at 15:37",
    content:
      "Online narratives are increasingly claiming UNIFIL failed to prevent Hezbollah activity in the south and failed to stop the Israeli advance after the shelling incident that wounded Ghanaian peacekeepers earlier this month.\nThese claims remain unverified.",
    media: null,
    metrics: {
      likes: 812,
      comments: 206,
      shares: 344,
    },
    profileMeta: {
      intro: "National media",
      bio: "24-hour national coverage of politics and security",
      location: "Beirut, Lebanon",
      joined: "Joined April 2016",
      note: "Click here to return to post",
      friends: null,
      followers: "286K followers",
      work: "Media organization",
      education: null,
    },
  },
  {
    id: 8,
    platform: "x",
    profileName: "Jerusalem Evening Standard",
    profileHandle: "@JerusalemStandard",
    verified: true,
    profilePicture: "assets/profiles/jerusalem.jpg",
    timestamp: "25 Mar 2026 · 15:40",
    content:
      'Escalating online discourse on the Lebanon front is tying UNIFIL to Hezbollah and UNRWA to Hamas.\nSome say the IDF had to enter Lebanon because UNIFIL failed; other are now calling UN peacekeepers an "occupation force."\nWho is right?',
    media: null,
    metrics: {
      replies: 71,
      reposts: 105,
      likes: 618,
      views: 25100,
    },
    profileMeta: {
      intro: "National newsroom",
      bio: "Breaking politics, defense and diplomacy",
      location: "Jerusalem",
      joined: "Joined September 2014",
      note: "Click here to return to post",
      following: "1,102 Following",
      followers: "418.6K Followers",
      website: "jerusalemstandard.example",
    },
  },
  {
    id: 9,
    platform: "facebook",
    profileName: "World Monitor International",
    profileHandle: null,
    verified: true,
    profilePicture: "assets/profiles/world.avif",
    timestamp: "25 March 2026 at 15:43",
    content:
      "UNIFIL and UNRWA are working tirelessly in the Middle East,\nbut some wonder if they're doing more harm than good.\nWith allegations for colluding with terrorists their reputations are now more brittle than ever.",
    media: null,
    metrics: {
      likes: 1204,
      comments: 287,
      shares: 476,
    },
    profileMeta: {
      intro: "International media",
      bio: "Global reporting on conflict, diplomacy and media manipulation",
      location: "London, United Kingdom",
      joined: "Joined June 2011",
      note: "Click here to return to post",
      friends: null,
      followers: "1.8M followers",
      work: "International newsroom",
      education: null,
    },
  },
];

const postsGrid = document.getElementById("postsGrid");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const authInput = document.getElementById("authPassword");
const authError = document.getElementById("authError");
const AUTH_PASSWORD = "SAPP";
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
