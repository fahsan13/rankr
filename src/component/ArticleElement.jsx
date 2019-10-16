import React from 'react';

const renderHeading = data => <h2>{data.text}</h2>;
const renderParagraph = data => <p>{data.text}</p>;
const renderImage = data => <img src={data.url} alt={data.altText} width={data.width} height={data.height} />;
const renderList = data => {
    return (data.type === 'ordered') ?
        <ol>{data.items.map((listItem, key) => <li key={key}>{listItem}</li>)}</ol> :
        <ul>{data.items.map((listItem, key) => <li key={key}>{listItem}</li>)}</ul>;
};

const ArticleElement = ({ type, model }) => {
    switch (type) {
        case 'heading':
            return renderHeading(model);
        case 'paragraph':
            return renderParagraph(model);
        case 'image':
            return renderImage(model);
        case 'list':
            return renderList(model);
        default:
            break;
    }
};

export default ArticleElement;
