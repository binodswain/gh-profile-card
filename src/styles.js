export const PROFILE_STYLE = `
.profile-wrapper, .profile-stats-wrapper, .profile-btn-wrapper {
  font-family: monospace;
  width: 300px;
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 15px;
  box-sizing: border-box; }
  .profile-wrapper .img-wrapper, .profile-stats-wrapper .img-wrapper, .profile-btn-wrapper .img-wrapper {
    flex: 1;
    height: 80px;
    width: 80px; }
    .profile-wrapper .img-wrapper img, .profile-stats-wrapper .img-wrapper img, .profile-btn-wrapper .img-wrapper img {
      height: 100%;
      border-radius: 50%; }
  .profile-wrapper .userdetails-wrapper, .profile-stats-wrapper .userdetails-wrapper, .profile-btn-wrapper .userdetails-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center; }
    .profile-wrapper .userdetails-wrapper .name, .profile-stats-wrapper .userdetails-wrapper .name, .profile-btn-wrapper .userdetails-wrapper .name {
      color: black;
      font-size: 20px;
      font-weight: 600;
      line-height: 20px; }
    .profile-wrapper .userdetails-wrapper .bio, .profile-wrapper .userdetails-wrapper .company, .profile-stats-wrapper .userdetails-wrapper .bio, .profile-stats-wrapper .userdetails-wrapper .company, .profile-btn-wrapper .userdetails-wrapper .bio, .profile-btn-wrapper .userdetails-wrapper .company {
      color: grey;
      font-size: 15px;
      margin-top: 5px; }

.profile-stats-wrapper {
  justify-content: space-between;
  padding-top: 0; }
  .profile-stats-wrapper .repostats-wrapper,
  .profile-stats-wrapper .follower-wrapper,
  .profile-stats-wrapper .following-wrapper {
    flex: 1;
    text-align: center; }
    .profile-stats-wrapper .repostats-wrapper .header,
    .profile-stats-wrapper .follower-wrapper .header,
    .profile-stats-wrapper .following-wrapper .header {
      font-weight: bold; }
    .profile-stats-wrapper .repostats-wrapper .num,
    .profile-stats-wrapper .follower-wrapper .num,
    .profile-stats-wrapper .following-wrapper .num {
      margin-top: 5px;
      font-size: 20px; }

.profile-btn-wrapper {
  padding-top: 0; }
  .profile-btn-wrapper .button {
    padding: 5px 10px;
    text-decoration: none;
    background-color: white;
    border: 1px solid;
    border-radius: 4px;
    font-weight: 600; }

.link {
  text-decoration: none;
  color: #24292e; }

.dark-themed {
  border: 1px solid #24292e;
  width: 300px;
  display: inline-block; }
  .dark-themed.contains-sibling {
    border-bottom: none; }
  .dark-themed .link {
    color: white; }
    .dark-themed .link:hover {
      color: #0366d6; }
  .dark-themed .profile-wrapper, .dark-themed .profile-stats-wrapper, .dark-themed .profile-btn-wrapper {
    background-color: #24292e; }
  .dark-themed .userdetails-wrapper .name {
    color: white; }
  .dark-themed .userdetails-wrapper .bio, .dark-themed .userdetails-wrapper .company {
    color: white; }
  .dark-themed .profile-stats-wrapper .header {
    color: white; }
  .dark-themed .profile-stats-wrapper .num {
    color: white;
    text-decoration: none; }
  .dark-themed .profile-btn-wrapper .button {
    background-color: #24292e;
    border-color: white;
    color: white; }

.light-themed {
  border: 1px solid #ccc;
  width: 300px;
  display: inline-block; }
  .light-themed.contains-sibling {
    border-bottom: none; }
  .light-themed .link {
    color: #24292e; }
    .light-themed .link:hover {
      color: #0366d6; }
  .light-themed .profile-wrapper, .light-themed .profile-stats-wrapper, .light-themed .profile-btn-wrapper {
    background-color: white; }
  .light-themed .userdetails-wrapper .name {
    color: #24292e; }
  .light-themed .userdetails-wrapper .bio, .light-themed .userdetails-wrapper .company {
    color: #24292e; }
  .light-themed .profile-stats-wrapper .header {
    color: #24292e; }
  .light-themed .profile-stats-wrapper .num {
    color: #0366d6;
    text-decoration: none; }
  .light-themed .profile-btn-wrapper .button {
    background-color: white;
    border-color: #24292e;
    color: #24292e; }
`;

export const REPO_STYLE = `
* {
  margin: 0;
  padding: 0; }

.link {
  text-decoration: none;
  color: #24292e; }

.repo-wrapper {
  width: 300px;
  font-family: monospace;
  padding: 0 15px;
  box-sizing: border-box; }
  .repo-wrapper .title {
    font-size: 17px;
    text-align: center; }
  .repo-wrapper .repo {
    padding: 15px 0; }
    .repo-wrapper .repo .desc {
      font-size: 14px; }
    .repo-wrapper .repo .name {
      font-size: 14px; }
    .repo-wrapper .repo .language {
      font-size: 12px;
      background-color: brown;
      color: white;
      padding: 0 3px;
      border-radius: 2px; }
    .repo-wrapper .repo .stats {
      display: flex; }
      .repo-wrapper .repo .stats .count {
        flex: 1; }

`;
