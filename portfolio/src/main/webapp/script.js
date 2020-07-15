/**
  * This is the main javascript file for the portfolio page. Contains a showRandomQuotes method and displayName.
  *
  * Copyright 2019 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  https://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  * @author: samii9914
  */


/**
 * Shows random quotes on the page.
 * @return {void}
 */
function showRandomQuotes() {
  const quotes = [
      "Bring your passion and whole self to work everyday!",
      "The secret of getting ahead is getting started.",
      "Do one thing every day that scares you.",
      "Great things are done by a series of small things brought together.",
      "Work hard in silence, let your success be the noise.",
      "The hard days are what make you stronger.",
      "In the middle of every difficulty lies opportunity",
  ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quotesContainer = document.getElementById('greeting-container');
  quotesContainer.innerText = quote;
}

/**
 * Displays "Hello [yourname] on the page"
 * @return {void}
 */
/*function displayName() {
    const promiseText=fetch('/data');
    promiseText.then((request)=>request.text().then((name)=>document.getElementById('greeting-container').innerText = name))
}*/

function showComments() {
    fetch('/data').then(response => response.json()).then((comments) => {

        const commentsListElement = document.getElementById('comments-container');
        for(let i=0;i<comments.length;i++) {
            commentsListElement.appendChild(
                createListElement(comments[i]));
        };
    })
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}