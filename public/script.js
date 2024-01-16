function authorSVG() {

  var span = document.createElement('span');
  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "20");
  svgElement.setAttribute("height", "20");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("class", "fa-secondary");
  path1.setAttribute("opacity", "0.4");
  path1.setAttribute("d", "M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z");
  path1.setAttribute("fill", "currentColor");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("class", "fa-primary");
  path2.setAttribute("d", "M11.9999 12.0001C13.2867 12.0001 14.3299 10.9569 14.3299 9.67004C14.3299 8.38322 13.2867 7.34009 11.9999 7.34009C10.7131 7.34009 9.66992 8.38322 9.66992 9.67004C9.66992 10.9569 10.7131 12.0001 11.9999 12.0001Z");
  path2.setAttribute("fill", "currentColor");

  var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("class", "fa-primary");
  path3.setAttribute("d", "M14.6792 16.6601C15.4892 16.6601 15.9592 15.7601 15.5092 15.0901C14.8292 14.0801 13.5092 13.4001 11.9992 13.4001C10.4892 13.4001 9.16919 14.0801 8.48919 15.0901C8.03919 15.7601 8.50919 16.6601 9.31919 16.6601H14.6792Z");
  path3.setAttribute("fill", "currentColor");

  svgElement.appendChild(path1);
  svgElement.appendChild(path2);
  svgElement.appendChild(path3);
  span.appendChild(svgElement);
  return span;
}

function publishDateSvg() {
  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "20");
  svgElement.setAttribute("height", "20");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("class", "fa-primary");
  path1.setAttribute("d", "M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75022V2C8.75022 1.59 8.41022 1.25 8.00022 1.25C7.59022 1.25 7.25022 1.59 7.25022 2V3.56C4.55022 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z");
  path1.setAttribute("fill", "currentColor");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("class", "fa-secondary");
  path2.setAttribute("opacity", "0.4");
  path2.setAttribute("d", "M20 9.84009C20.55 9.84009 21 10.2901 21 10.8401V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V10.8401C3 10.2901 3.45 9.84009 4 9.84009H20Z");
  path2.setAttribute("fill", "currentColor");

  var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("class", "fa-primary");
  path3.setAttribute("d", "M8.5 14.9999C8.37 14.9999 8.24 14.9699 8.12 14.9199C8 14.8699 7.89001 14.7999 7.79001 14.7099C7.70001 14.6099 7.62999 14.4999 7.57999 14.3799C7.52999 14.2599 7.5 14.1299 7.5 13.9999C7.5 13.8699 7.52999 13.7399 7.57999 13.6199C7.62999 13.4999 7.70001 13.3899 7.79001 13.2899C7.89001 13.1999 8 13.1299 8.12 13.0799C8.36 12.9799 8.64 12.9799 8.88 13.0799C9 13.1299 9.10999 13.1999 9.20999 13.2899C9.29999 13.3899 9.37001 13.4999 9.42001 13.6199C9.47001 13.7399 9.5 13.8699 9.5 13.9999C9.5 14.1299 9.47001 14.2599 9.42001 14.3799C9.37001 14.4999 9.29999 14.6099 9.20999 14.7099C9.10999 14.7999 9 14.8699 8.88 14.9199C8.76 14.9699 8.63 14.9999 8.5 14.9999Z");
  path3.setAttribute("fill", "currentColor");

  svgElement.appendChild(path1);
  svgElement.appendChild(path2);
  svgElement.appendChild(path3);

  var span = document.createElement('span');
  span.appendChild(svgElement);
  return span;
}

function viewSvg() {
  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "20");
  svgElement.setAttribute("height", "20");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("class", "fa-secondary");
  path1.setAttribute("opacity", "0.4");
  path1.setAttribute("d", "M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z");
  path1.setAttribute("fill", "currentColor");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("class", "fa-primary");
  path2.setAttribute("d", "M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z");
  path2.setAttribute("fill", "currentColor");

  svgElement.appendChild(path1);
  svgElement.appendChild(path2);

  var span = document.createElement('span');
  span.appendChild(svgElement);
  return span;

}

function downloadSvg() {
  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("width", "24");
  svgElement.setAttribute("height", "24");
  svgElement.setAttribute("viewBox", "0 0 24 24");
  svgElement.setAttribute("fill", "none");

  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttribute("class", "fa-primary");
  path1.setAttribute("d", "M10.2894 10.3398V18.4098C10.2894 20.3898 8.66937 21.9998 6.69937 21.9998C4.71937 21.9998 3.10938 20.3898 3.10938 18.4098C3.10938 16.4398 4.71937 14.8298 6.69937 14.8298C7.52938 14.8298 8.27938 15.1198 8.88938 15.5898V10.7398L10.2894 10.3398Z");
  path1.setAttribute("fill", "currentColor");

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("class", "fa-primary");
  path2.setAttribute("d", "M20.8909 7.31982V16.4798C20.8909 18.4598 19.2809 20.0698 17.3009 20.0698C15.3309 20.0698 13.7109 18.4598 13.7109 16.4798C13.7109 14.5098 15.3309 12.8998 17.3009 12.8998C18.1409 12.8998 18.8909 13.1898 19.5009 13.6698V7.71982L20.8909 7.31982Z");
  path2.setAttribute("fill", "currentColor");

  var path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path3.setAttribute("class", "fa-primary");
  path3.setAttribute("opacity", "0.4");
  path3.setAttribute("d", "M20.8906 5.18007V7.32007L8.89062 10.7401V6.75007C8.89062 5.28007 9.78062 4.14007 11.1906 3.76007L16.9706 2.18007C18.1406 1.86007 19.1306 1.97007 19.8306 2.51007C20.5406 3.04007 20.8906 3.94007 20.8906 5.18007Z");
  path3.setAttribute("fill", "currentColor");

  svgElement.appendChild(path1);
  svgElement.appendChild(path2);
  svgElement.appendChild(path3);

  var span = document.createElement('span');
  span.appendChild(svgElement);
  return span;
}

function getResult(response) {
  var result = document.createElement('div');
  result.className = 'result';

  var thumbnailDiv = document.createElement('div');
  thumbnailDiv.className = 'thumbnail-div';

  var imgControl = document.createElement('img');
  imgControl.className = 'img-control';
  imgControl.src = response.thumbnail_url;
  imgControl.alt = response.title;
  thumbnailDiv.appendChild(imgControl)

  var songDetails = document.createElement('div');
  songDetails.className = 'song-details';
  var songTitle = document.createElement('p');
  songTitle.className = 'song-title';
  songTitle.innerText = response.title

  var details = document.createElement('div');
  details.className = 'details';

  var author = document.createElement('a');
  author.className = 'author';
  author.href = response.artist.url;
  author.setAttribute('target', '_blank');
  var textNode = document.createTextNode(response.artist.name);
  author.append(authorSVG());
  author.append(textNode);

  var publishDate = document.createElement('p');
  publishDate.className = 'publish-date';
  var textNode = document.createTextNode(response.publish_date);
  publishDate.appendChild(publishDateSvg());
  publishDate.appendChild(textNode);

  var views = document.createElement('p');
  views.className = 'views';
  var textNode = document.createTextNode(formatNumber(response.views));
  views.appendChild(viewSvg());
  views.appendChild(textNode);

  var descDiv = document.createElement('div');
  var desc = document.createElement('div');
  desc.className = 'description';
  desc.textContent = response.description;
  descDiv.className = 'desc-div';
  descDiv.appendChild(desc);

  var downloadDiv = document.createElement('div');
  downloadDiv.className = 'download-div';
  downloadDiv.setAttribute('id', response.id);
  var downloadBtn = document.createElement('button');
  downloadBtn.setAttribute('class', 'btn btn-dark download-btn');
  downloadBtn.setAttribute('type', 'button');
  downloadBtn.setAttribute('id', response.id);
  downloadBtn.addEventListener('click', () => {
    makeBtn(response.id, response.title);
  });
  downloadBtn.appendChild(downloadSvg());
  var textNode = document.createTextNode('Download Mp3');
  downloadBtn.appendChild(textNode);
  downloadDiv.appendChild(downloadBtn);

  details.appendChild(author);
  details.appendChild(publishDate);
  details.appendChild(views);
  songDetails.appendChild(songTitle);
  songDetails.appendChild(details);
  songDetails.appendChild(descDiv);
  songDetails.appendChild(downloadDiv);

  result.appendChild(thumbnailDiv);
  result.appendChild(songDetails);

  return result;
}

function formatNumber(number) {
  if (number >= 10000000) {
    return (number / 10000000).toFixed(2) + ' Cr';
  } else if (number >= 100000) {
    return (number / 100000).toFixed(2) + ' Lakh';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + ' K';
  } else {
    return number;
  }
}

function removeChildren(parentID) {
  var parent = document.getElementById(parentID)
  parent.innerHTML = "";
}
function makeSpinner() {
  var parent = document.getElementById('results-area');
  var equalizer = document.createElement('div');
  equalizer.className = 'equalizer';
  equalizer.setAttribute('id', 'equalizer');

  for (var i = 0; i < 13; i++) {
    var bar = document.createElement('div');
    bar.className = 'bar';
    equalizer.appendChild(bar);
  }
  var equalizerDiv = document.createElement('div');
  equalizerDiv.className = 'equalizer-div';
  equalizerDiv.setAttribute('id', 'equalizerDiv');
  equalizerDiv.appendChild(equalizer);
  equalizer.style.display = 'none';
  parent.appendChild(equalizerDiv);
}


function makeBtn(parentId, title) {
  const btnGroup = document.createElement('div');
  btnGroup.classList.add('button-group');

  const buttonLabels = [
    { label: '320Kbps', class: 'max-btn' },
    { label: '256Kbps', class: 'high-btn' },
    { label: '128Kbps', class: 'standard-btn' },
    { label: '64Kbps', class: 'low-btn' },
  ];

  buttonLabels.forEach(({ label, class: buttonClass }) => {
    const button = document.createElement('button');
    button.classList.add('child-btn', 'btn', buttonClass);
    button.textContent = label; // Use textContent for efficiency
    button.addEventListener('click', () => {
      downloadSong(parentId, title, button.innerText);
    });
    btnGroup.appendChild(button);
  });

  const parentDiv = document.getElementById(parentId);
  parentDiv.innerHTML = ''; // Clear content for efficiency
  parentDiv.appendChild(btnGroup);
}

function downloadSong(videoID, title, bitrate) {
  makeSpinner();
  var loadText = document.createElement('div');
  $('.equalizer-div').append(loadText);
  var path = `/download?title=${encodeURIComponent(title)}&videoID=${videoID}&bitrate=${bitrate}`;
  var filename = `${title} (${bitrate}).mp3`;
  var fileLink = document.createElement('a');
  fileLink.href = path;
  fileLink.download = filename;
  fileLink.click();
  loadText.setAttribute('id', 'loadText');
  loadText.innerText = 'Download will began shortly, Please Wait!'
  $('.result').hide();
  $('.equalizer').show();
  fileLink.remove();
  setTimeout(function () {
    loadText.innerText = '';
    var equalizerDiv = document.getElementById('equalizerDiv');
    equalizerDiv.innerHTML = '';
    $('.result').show();
    $('#equalizerDiv').remove();
  }, 3000);
}