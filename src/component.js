export const profileTemplate = (data, {
        theme = 'light',
        bio: showBio = 'true',
        location = 'false',
        company: showCompany = 'true',
        showstats: showStats = 'true'
}) => {
    const {
        avatar_url = '',
        name, bio, company, html_url
    } = data;
    const bioData = showBio.toLowerCase() == 'true' ? `<div class="bio">${bio}</div>` : '';
    const companyData = showCompany.toLowerCase() == 'true' ? `<div class="company">
                <a href="https://github.com/${company.slice(1)}" class="link" target="_blank">${company.slice(1)}</a>
            </div>` : '';
    const statsData = showStats.toLowerCase() == 'true' ? profileStats(data) : '';
    // console.log(typeof sibling);
    
    return `<div class="${theme}-themed">
    <div class="profile-wrapper">
        <div class="img-wrapper">
            <img src="${avatar_url}" class="profile-pic">
        </div>
        <div class="userdetails-wrapper">
            <div class="name">${name}</div>
            ${bioData}
            ${companyData}
        </div>
    </div>
    ${statsData}
    <div class="profile-btn-wrapper">
        <a href="${html_url}" class="button profile-button" target="_blank">View profile</a>
    </div>
    <slot></slot>
</div>`
}

const profileStats = ({
    html_url,
    public_repos,
    followers,
    following }) => `<div class="profile-stats-wrapper">
        <div class="repostats-wrapper">
            <div class="header">Repositories</div>
            <div class="num">
                <a href="${html_url}?tab=repositories" class="num" target="_blank">${public_repos}</a>
            </div>
        </div>
        <div class="follower-wrapper">
            <div class="header">Followers</div>
            <div class="num">
                <a href="${html_url}?tab=followers" class="num" target="_blank">${followers}</a>
            </div>
        </div>
        <div class="following-wrapper">
            <div class="header">Following</div>
            <div class="num">
                <a href="${html_url}?tab=following" class="num" target="_blank">${following}</a>
            </div>
        </div>
    </div>`

export const repoTemplate = (data, config={}) => {
    let repoMarkup = data.map(r => {
        const {
            description, forks_count, html_url, language, name,
            pushed_at, stargazers_count, updated_at, watchers_count
        } = r;
        // console.log(r);
        
        return `<div class="repo">
            <h3 class="name" aria-describedby="${description}">
                <a href="${html_url}" class="link" target="_blank">${name}</a>
                ${language ? `<span class="language">${language}</span>` : ''}
            </h3>
            <div class="stats">
                <div class="count">Stars: ${stargazers_count}</div>
                <div class="count">Watch: ${watchers_count}</div>
                <div class="count">Fork: ${forks_count}</div>
            </div>
        </div>`
    }).join('');
    return `<div class="repo-wrapper">
        ${data.length ? `<h3 class="title">Repositories</h3>`:''}
        ${repoMarkup}
    </div>`
}
