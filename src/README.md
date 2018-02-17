# Saatchi Art Code Challenge

### It looks like this currently:

![Fetch Request](https://dl.dropboxusercontent.com/s/pd1o775nk9q92kx/Start..jpg?dl=0)

### And we expect it to look like this:

![Fetch Request](https://dl.dropboxusercontent.com/s/oxusi9ccukt3bad/Finished.gif?dl=0)

### In order to do this, we need to complete several tasks:

1. Retrieve artwork data via AJAX from [endpoint - (/api/data.json)](/api/data.json) on initial load of the application

2. Reduce that data into the Redux State

3. Hook up the search box so it filters the artworks displayed by artwork title
   on input change. This should be done in the redux way -

   1. create an action, dispatch
   2. that action onChange in the search box
   3. add a reducer to reduce the global state based on the fired action
   4. ensure the "ArtworksLis" receive the filtered "Artwork" components

4. Add some styling to display the artworks in a 3 column layout (via Flexbox or Grid)

5. **Bonus**: Add in the ability to favorite Artwork into the Redux State, tie it into local storage to retrieve favorites on refresh of the page

### For reference here's an example of the finished apps Redux State using [Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en):

![Fetch Request](https://dl.dropboxusercontent.com/s/a6wlsjojnpzsdl4/ReduxState.gif?dl=0)

### As you go, save commits however you think is appropriate for a task.

When you're done, please put it on [Github](https://github.com) and send us the url to your repo
