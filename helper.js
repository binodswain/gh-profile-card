const Div = (data) => {
    const {
        text, classes=[], attrs={}, children=[], link
    } = data;
    const div = document.createElement('div');
    if (classes.length) {
        div.className = classes.join(' ');
    }

    let childrenStr = '';

    if (children.length) {
        children.forEach(child => {
            div.appendChild(child);
            // childrenStr+= child
        })
    }
    let attrKeys = Object.keys(attrs);
    // let sampleattrKeys = '';
    if (attrKeys.length) {
        attrKeys.forEach(key => {
            div.setAttribute(key, attrs[key].toString());
            // sampleattrKeys += `${key}="${attrs[key]}" `
        })
    }
    if (link) {
        let linkC = Link({
            text, href: link,
            classes: [data.linkClass || 'link']
        })
        div.appendChild(linkC)
    } else if (text) {
        div.textContent = text;
    }
    return div;
}


const Img = (data) => {
    const { src, classes = [], attrs = {} } = data;
    let img = new Image();
    if (src) {
        img.src = src
    }
    let attrKeys = Object.keys(attrs);
    if (attrKeys.length) {
        attrKeys.forEach(key => {
            img.setAttribute(key, attrs[key].toString());
        })
    }
    if (classes.length) {
        img.className = classes.join(' ');
    }

    return img;
}

const Btn = (data) => {
    const {
        text, classes = [], attrs = {} 
    } = data;
    const btn = document.createElement('button');
    let attrKeys = Object.keys(attrs);
    if (attrKeys.length) {
        attrKeys.forEach(key => {
            btn.setAttribute(key, attrs[key].toString());
        })
    }
    if (classes.length) {
        btn.className = classes.join(' ');
    }
    if (text) {
        btn.textContent = text;
    }
    return btn
}

const Link = (data) => {
    let {
        text, href, classes = [], attrs = {} 
    } = data;
    text = text || href;
    const a = document.createElement('a');
    if (href) { a.href = href;}
    if (text) { a.textContent = text; }
    let attrKeys = Object.keys(attrs);
    if (attrKeys.length) {
        attrKeys.forEach(key => {
            a.setAttribute(key, attrs[key].toString());
        })
    }
    if (classes.length) {
        a.className = classes.join(' ');
    }
    a.setAttribute('target', '_blank')
    return a;
}

module.exports = {
    Div, Img, Btn, Link
}