# gh-profile
GitHub profile widget. A simple widget to display your github profile and repositories.

## Usage
Include script and style just before </body> tag:
```html
<script src="/dist/github-widget.esm.mjs" type="module"></script>
```
Include HTML code anywhere you would like to place widget:
```html
<github-w user="binodswain">
    <profile-info 
        data-theme="light"
        data-company="true"
        data-bio="false"
        >
    </profile-info>
</github-w>
```
## Screenshot
![demo](/media/github-card.png?raw=true "light and dark")
## Configurations
profile-info options
repo-info options

## Examples
- **Dark mode**
```html
<github-w user="binodswain">
    <profile-info 
        data-theme="dark"
        data-company="true"
        data-bio="false"
        >
    </profile-info>
</github-w>
```
- **Profile + repo**
```html
    <github-w user="binodswain">
        <profile-info 
          data-theme="light"
          data-company="true"
          data-bio="false"
          >
          <repo-info
            data-limit="5" 
            data-direction="desc"
            data-sort="updated"
          ></repo-info>
        </profile-info>
    </github-w>
```
- **Multiple widgets in same page**
```html
<github-w user="binodswain">
    <profile-info 
        data-theme="dark"
        data-company="true"
        data-bio="false"
        >
    </profile-info>
</github-w>
...
<github-w user="<otheruser>">
    <profile-info 
        data-theme="dark"
        data-company="true"
        data-bio="false"
        >
    </profile-info>
</github-w>
```

- **Only repositories**
```html
    <github-w user="binodswain">
        <repo-info
            data-limit="5" 
            data-direction="desc"
            data-sort="updated"
        ></repo-info>
    </github-w>
```
