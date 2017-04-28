angular.module('myApp', [])
  .controller('app', function ($scope) {
    var scp = $scope;
    scp.imgs = [];
    for (var i = 0; i < 0; i++) {
      scp.imgs.push("./imgs/glass6.jpg")
    }
    scp.contact_info = {
      "Phone": "416-273-7302",
      "Fax": "416-273-0130",
      "Email": "thomas@insoglass.com",
      "Address": "31 Passmore Ave Unit 31",
    };
    scp.proj_imgs = ["J_Addison_school-2-1.jpg", "beer_store_door_16-1.jpg", "beer_store_door_16-2.jpg", "bridalwood_elevator-8-1.jpg", "bridalwood_elevator-8-2.jpg", "bridalwood_elevator-8-3.jpg", "bridalwood_elevator-8-4.jpg", "bridalwood_elevator-8-5.jpg", "bridalwood_elevator-8-6.jpg", "bridalwood_extension-18-1.jpg", "bridalwood_extension-18-2.jpg", "bridalwood_extension-18-3.jpg", "bridalwood_extension-18-4.jpg", "bridalwood_extension-18-5.jpg", "condo_window-5-1.jpg", "condo_window-5-2.jpg", "congee_star_storefront-11-1.jpg", "congee_star_storefront-11-10.jpg", "congee_star_storefront-11-11.jpg", "congee_star_storefront-11-12.jpg", "congee_star_storefront-11-2.jpg", "congee_star_storefront-11-3.jpg", "congee_star_storefront-11-4.jpg", "congee_star_storefront-11-5.jpg", "congee_star_storefront-11-6.jpg", "congee_star_storefront-11-7.jpg", "congee_star_storefront-11-8.jpg", "congee_star_storefront-11-9.jpg", "dt_storefront-12-1.jpg", "dt_storefront-12-2.jpg", "dt_storefront-12-3.jpg", "dt_storefront-17-1.jpg", "dt_storefront-17-2.jpg", "dt_storefront-17-3.jpg", "dt_storefront-17-4.jpg", "dt_storefront-17-5.jpg", "four_season_sunroom-10-1.jpg", "four_season_sunroom-10-2.jpg", "four_season_sunroom-10-3.jpg", "glass_showcase-0-1.jpg", "house_porch-6-1.jpg", "house_porch-6-2.jpg", "house_porch-6-3.jpg", "house_railing-4-1.jpg", "house_railing-4-2.jpg", "office_storefront-14-1.jpg", "office_storefront-14-2.jpg", "office_storefront-14-3.jpg", "squareone-1-1.jpg", "squareone-1-2.jpg", "storefront-9-1.jpg", "storefront-9-2.jpg", "tridel_condo-3-1.jpg", "tridel_condo-3-2.jpg", "tridel_condo-3-3.jpg"]
    var regex = /(^.*)-(\d+)-(\d+)/;
    scp.proj_unique = []
    scp.proj_img_objs = [];

    function titleCase(str) {
      var splitStr = str.toLowerCase().split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    }

    scp.proj_imgs.forEach(function (img) {
      var parsed = regex.exec(img);

      if (parsed) {
        var idx = parseInt(parsed[2]);
        if (parsed[3] == 1) {

          while (scp.proj_img_objs.length <= idx) {
            scp.proj_img_objs.push(null)
          }
          scp.proj_img_objs[idx] = {
            imgs: [img]
          }
        } else {
          scp.proj_img_objs[idx].imgs.push(img)
        }
        scp.proj_img_objs[idx].name = titleCase(parsed[1].replace(/_/g, " "))
      }
    })

    scp.openPhotoSwipe = function(proj_img_obj) {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      // build items array
      var items = [];
      //  {
      //    src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
      //  },
      //  {
      //    src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      //  }
      //];

      var size = {"J_Addison_school-2-1.jpg": [3300, 2550],
        "beer_store_door_16-1.jpg": [2550, 3300],
        "beer_store_door_16-2.jpg": [2550, 3300],
        "bridalwood_elevator-8-1.jpg": [2550, 3300],
        "bridalwood_elevator-8-2.jpg": [2550, 3300],
        "bridalwood_elevator-8-3.jpg": [2550, 3300],
        "bridalwood_elevator-8-4.jpg": [2550, 3300],
        "bridalwood_elevator-8-5.jpg": [2550, 3300],
        "bridalwood_elevator-8-6.jpg": [2550, 3300],
        "bridalwood_extension-18-1.jpg": [2550, 3300],
        "bridalwood_extension-18-2.jpg": [2550, 3300],
        "bridalwood_extension-18-3.jpg": [2550, 3300],
        "bridalwood_extension-18-4.jpg": [2550, 3300],
        "bridalwood_extension-18-5.jpg": [2550, 3300],
        "condo_window-5-1.jpg": [2550, 3300],
        "condo_window-5-2.jpg": [2550, 3300],
        "congee_star_storefront-11-1.jpg": [3300, 2550],
        "congee_star_storefront-11-10.jpg": [3300, 2550],
        "congee_star_storefront-11-11.jpg": [2550, 3300],
        "congee_star_storefront-11-12.jpg": [2550, 3300],
        "congee_star_storefront-11-2.jpg": [3300, 2550],
        "congee_star_storefront-11-3.jpg": [3300, 2550],
        "congee_star_storefront-11-4.jpg": [3300, 2550],
        "congee_star_storefront-11-5.jpg": [3300, 2550],
        "congee_star_storefront-11-6.jpg": [2550, 3300],
        "congee_star_storefront-11-7.jpg": [3300, 2550],
        "congee_star_storefront-11-8.jpg": [3300, 2550],
        "congee_star_storefront-11-9.jpg": [3300, 2550],
        "dt_storefront-12-1.jpg": [3300, 2550],
        "dt_storefront-12-2.jpg": [3300, 2550],
        "dt_storefront-12-3.jpg": [3300, 2550],
        "dt_storefront-17-1.jpg": [2550, 3300],
        "dt_storefront-17-2.jpg": [3300, 2550],
        "dt_storefront-17-3.jpg": [3300, 2550],
        "dt_storefront-17-4.jpg": [2550, 3300],
        "dt_storefront-17-5.jpg": [2550, 3300],
        "four_season_sunroom-10-1.jpg": [3300, 2550],
        "four_season_sunroom-10-2.jpg": [3300, 2550],
        "four_season_sunroom-10-3.jpg": [3300, 2550],
        "glass_showcase-0-1.jpg": [2550, 3300],
        "house_porch-6-1.jpg": [2550, 3300],
        "house_porch-6-2.jpg": [2550, 3300],
        "house_porch-6-3.jpg": [2550, 3300],
        "house_railing-4-1.jpg": [3300, 2550],
        "house_railing-4-2.jpg": [2550, 3300],
        "office_storefront-14-1.jpg": [3300, 2550],
        "office_storefront-14-2.jpg": [3300, 2550],
        "office_storefront-14-3.jpg": [2550, 3300],
        "squareone-1-1.jpg": [2550, 3300],
        "squareone-1-2.jpg": [2550, 3300],
        "storefront-9-1.jpg": [3300, 2550],
        "storefront-9-2.jpg": [3300, 2550],
        "tridel_condo-3-1.jpg": [2550, 3300],
        "tridel_condo-3-2.jpg": [2550, 3300],
        "tridel_condo-3-3.jpg": [2550, 3300]}
      proj_img_obj.imgs.forEach(function(item){
        items.push({src:"./imgs/projects/" + item , w:size[item][0], h:size[item][1]})
      });

      var options = {
        history: false,
        focus: false,
        showAnimationDuration: 1,
        hideAnimationDuration: 1
      };

      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    };
  });