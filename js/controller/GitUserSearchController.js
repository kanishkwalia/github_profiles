githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

var searchResource = $resource('https://api.github.com/search/users?access_token=54be19fec323129b35c1d136d510baeddcc8a17a');

var self = this;

self.doSearch = function() {
  self.searchResult = searchResource.get(
  { q: self.searchTerm }
  );
  };
}]);