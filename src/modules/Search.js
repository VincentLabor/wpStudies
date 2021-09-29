import $ from "jquery";

//3 areas when constructing object oriented programming
//1. Where we describe and create/initiate our object
class Search {
  constructor() {
    this.openButton = $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.events(); //Events is called here so that the function is called immediately
    this.isOverlayOpen = false;
    this.searchField = $("#search-term");

  }
  //2. Events. If some specific thing happens, you add a hat.
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.searchField.on("keydown", this.typingLogic);
  }

  //3. Methods/Actions
  //To keep code fast, avoid dealing with the dom
  typingLogic() {
    alert("hello")
  }
  
  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
  }

  keyPressDispatcher(e) {
    if (e.keyCode === 83 && this.isOverlayOpen == false) {
      this.isOverlayOpen = true;
      this.openOverlay();
    }

    if (e.keyCode === 27 && this.isOverlayOpen == true) {
      this.isOverlayOpen = false;
      this.closeOverlay();
    }
  }

  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
  }
}

export default Search;
