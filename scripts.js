// creating photo arrays for food types
var totalChick;
var totalBeef;
var totalSea;
var totalBake;

var obj;
$(document).ready(function () {

    $.getJSON('receipes.json', function (data) {
        chickenArray.push(data.receipes.chicken);
        beefArray.push(data.receipes.beef);
        seafoodArray.push(data.receipes.seafood);
        bakingArray.push(data.receipes.baking);
        soupsArray.push(data.receipes.soups);

        chickenArray = chickenArray[0];
        beefArray = beefArray[0];
        seafoodArray = seafoodArray[0];
        bakingArray = bakingArray[0];
        soupsArray = soupsArray[0];
        
        //totalChick = chickenArray.length;
        //totalbeef = beefArray.length;
        //totalSea = seafoodArray.length; 
        //totalbake = bakingArray.length; 


    });

    var chickenArray = [];
    var beefArray = [];
    var seafoodArray = [];
    var bakingArray = [];
    var soupsArray = [];





    /* var photoChickenArray = [];
    var photoBeefArray = [];
    var photoSeafoodArray = []; */

    var photoArray = [];
    // Data
    var foodTypes = ['Chicken', 'Beef', 'Seafood', 'Baking','Soups & Stews']


    $.each(foodTypes, function (val, text) {
        $('#foodSelector').append($('<option></option>').val(val).html(text))
    });

    // Select Food
    $("#foodSelector").on('change', function () {
        // need to load food types
        $("#foodName").text($("#foodSelector option:selected").text());
        console.log(foodName);

        foodSelected = foodName.innerText;
        loadEventImages(foodSelected);
    });

    loadEventImages = function (foodSelected) {

        photoArray = [];
        $("#recipeGrid").html("");

        if (foodSelected == "Chicken") {
            for (var i = 0, l = chickenArray.length; i < l; i++) {
                var recipeData = {}

                recipeData.imgURL = chickenArray[i].img;
                recipeData.title = chickenArray[i].title;
                recipeData.credit = chickenArray[i].credit;
                recipeData.serveSize = chickenArray[i].serveSize;
                recipeData.cookTime = chickenArray[i].cookTime;
                recipeData.creditURL = chickenArray[i].creditURL;

                // looping through list of ingredients to get all of them
                for (var k = 0, m = 1; k < m; k++) {
                    recipeData.ingredients = chickenArray[i].ingredients[0];
                }
                // ERROR HERE

                // looping through list of instructions to get all of them
                for (var j = 0, m = 1; j < m; j++) {
                    recipeData.instructions = chickenArray[i].instructions[0];
                }

                photoArray.push(recipeData);
            }
        }
        if (foodSelected == "Beef") {
            for (var i = 0, l = beefArray.length; i < l; i++) {
                var recipeData = {}

                recipeData.imgURL = beefArray[i].img;
                recipeData.title = beefArray[i].title;
                recipeData.credit = beefArray[i].credit;
                recipeData.serveSize = beefArray[i].serveSize;
                recipeData.cookTime = beefArray[i].cookTime;
                recipeData.creditURL = beefArray[i].creditURL;

                // looping through list of ingredients to get all of them
                for (var k = 0, m = 1; k < m; k++) {
                    recipeData.ingredients = beefArray[i].ingredients[0];
                }

                // looping through list of instructions to get all of them
                for (var j = 0, m = 1; j < m; j++) {
                    recipeData.instructions = beefArray[i].instructions[0];
                }
                photoArray.push(recipeData);
            }
        }
        if (foodSelected == "Seafood") {
            for (var i = 0, l = seafoodArray.length; i < l; i++) {
                var recipeData = {}

                recipeData.imgURL = seafoodArray[i].img;
                recipeData.title = seafoodArray[i].title;
                recipeData.credit = seafoodArray[i].credit;
                recipeData.serveSize = seafoodArray[i].serveSize;
                recipeData.cookTime = seafoodArray[i].cookTime;
                recipeData.creditURL = seafoodArray[i].creditURL;

                // looping through list of ingredients to get all of them
                for (var k = 0, m = 1; k < m; k++) {
                    recipeData.ingredients = seafoodArray[i].ingredients[0];
                }

                // looping through list of instructions to get all of them
                for (var j = 0, m = 1; j < m; j++) {
                    recipeData.instructions = seafoodArray[i].instructions[0];
                }
                photoArray.push(recipeData);
            }
        }
        if (foodSelected == "Baking") {
            for (var i = 0, l = bakingArray.length; i < l; i++) {
                var recipeData = {}

                recipeData.imgURL = bakingArray[i].img;
                recipeData.title = bakingArray[i].title;
                recipeData.credit = bakingArray[i].credit;
                recipeData.serveSize = bakingArray[i].serveSize;
                recipeData.cookTime = bakingArray[i].cookTime;
                recipeData.creditURL = bakingArray[i].creditURL;

                // looping through list of ingredients to get all of them
                for (var k = 0, m = 1; k < m; k++) {
                    recipeData.ingredients = bakingArray[i].ingredients[0];
                }

                // looping through list of instructions to get all of them
                for (var j = 0, m = 1; j < m; j++) {
                    recipeData.instructions = bakingArray[i].instructions[0];
                }
                photoArray.push(recipeData);
            }
        }
        if (foodSelected == "Soups & Stews") {
            for (var i = 0, l = soupsArray.length; i < l; i++) {
                var recipeData = {}

                recipeData.imgURL = soupsArray[i].img;
                recipeData.title = soupsArray[i].title;
                recipeData.credit = soupsArray[i].credit;
                recipeData.serveSize = soupsArray[i].serveSize;
                recipeData.cookTime = soupsArray[i].cookTime;
                recipeData.creditURL = soupsArray[i].creditURL;

                // looping through list of ingredients to get all of them
                for (var k = 0, m = 1; k < m; k++) {
                    recipeData.ingredients = soupsArray[i].ingredients[0];
                }

                // looping through list of instructions to get all of them
                for (var j = 0, m = 1; j < m; j++) {
                    recipeData.instructions = soupsArray[i].instructions[0];
                }
                photoArray.push(recipeData);
            }
        }
        populatePhotoGrid();
    }


    // add the photos to the Photo Grid
    populatePhotoGrid = function () {
        if (photoArray.length == 0) {
            showEmptySet();
        } else {
            $(".event-controls").slideUp(150);
            $(".empty-set").slideUp(100);

            for (var i = 0, l = photoArray.length; i < l; i++) {
                $("#recipeGrid").append($("<div class='grid-item' onclick='showRecipeDetails(" + i + ")' style='background-image: url(" + photoArray[i].imgURL + ");'></div>"));
            }
        }
    }

    $("#eggs").click(function () {
        $('#eggsModal').modal('show');
    });
    $("#rice").click(function () {
        $('#riceModal').modal('show');
    });

    // Change Food
    toggleFoodPicker = function () {
        $(".food-controls").slideDown(150);
    }

    showRecipeDetails = function (i) {
        $("#fullImage").attr("src", photoArray[i].imgURL);
        $("#imageURL").attr("href", photoArray[i].imgURL);
        /* $("#credit").attr("href", photoArray[i].creditURL); */
        $("#creditURL").html('<a target="_blank" href="' + photoArray[i].creditURL + '">' + "Go to original recipe by " + photoArray[i].credit + ' <img src="img/newtab.png" class="glyphicon"/>' + '</a>');
        $("#recipeTitle").text(photoArray[i].title);
        $("#credit").text(photoArray[i].credit);
        $("#serveSize").text(photoArray[i].serveSize);
        $("#cookTime").text(photoArray[i].cookTime);

        //text for ingredients

        (photoArray[i].ingredients.ing1.length > 2) ? $("#ing1").html(photoArray[i].ingredients.ing1) : $("#ing1").css("display", "none");
        (photoArray[i].ingredients.ing2.length > 2) ? $("#ing2").html(photoArray[i].ingredients.ing2) : $("#ing2").css("display", "none");
        (photoArray[i].ingredients.ing3.length > 2) ? $("#ing3").html(photoArray[i].ingredients.ing3) : $("#ing3").css("display", "none");
        (photoArray[i].ingredients.ing4.length > 2) ? $("#ing4").html(photoArray[i].ingredients.ing4) : $("#ing4").css("display", "none");
        (photoArray[i].ingredients.ing5.length > 2) ? $("#ing5").html(photoArray[i].ingredients.ing5) : $("#ing5").css("display", "none");
        (photoArray[i].ingredients.ing6.length > 2) ? $("#ing6").html(photoArray[i].ingredients.ing6) : $("#ing6").css("display", "none");
        (photoArray[i].ingredients.ing7.length > 2) ? $("#ing7").html(photoArray[i].ingredients.ing7) : $("#ing7").css("display", "none");
        (photoArray[i].ingredients.ing8.length > 2) ? $("#ing8").html(photoArray[i].ingredients.ing8) : $("#ing8").css("display", "none");
        (photoArray[i].ingredients.ing9.length > 2) ? $("#ing9").html(photoArray[i].ingredients.ing9) : $("#ing9").css("display", "none");
        (photoArray[i].ingredients.ing10.length > 2) ? $("#ing10").html(photoArray[i].ingredients.ing10) : $("#ing10").css("display", "none");
        (photoArray[i].ingredients.ing11.length > 2) ? $("#ing11").html(photoArray[i].ingredients.ing11) : $("#ing11").css("display", "none");
        (photoArray[i].ingredients.ing12.length > 2) ? $("#ing12").html(photoArray[i].ingredients.ing12) : $("#ing12").css("display", "none");
        (photoArray[i].ingredients.ing13.length > 2) ? $("#ing13").html(photoArray[i].ingredients.ing13) : $("#ing13").css("display", "none");
        (photoArray[i].ingredients.ing14.length > 2) ? $("#ing14").html(photoArray[i].ingredients.ing14) : $("#ing14").css("display", "none");
        (photoArray[i].ingredients.ing15.length > 2) ? $("#ing15").html(photoArray[i].ingredients.ing15) : $("#ing15").css("display", "none");



        //html for instructions
        $("#ints1").html(photoArray[i].instructions.step1);
        $("#ints2").html(photoArray[i].instructions.step2);
        $("#ints3").html(photoArray[i].instructions.step3);
        $("#ints4").html(photoArray[i].instructions.step4);
        $("#ints5").html(photoArray[i].instructions.step5);
        $("#ints6").html(photoArray[i].instructions.step6);
        $("#ints7").html(photoArray[i].instructions.step7);
        $("#ints8").html(photoArray[i].instructions.step8);
        $("#ints9").html(photoArray[i].instructions.step9);
        $("#ints10").html(photoArray[i].instructions.step10);
        $("#ints11").html(photoArray[i].instructions.step11);
        $("#ints12").html(photoArray[i].instructions.step12);
        $("#ints13").html(photoArray[i].instructions.step13);
        $("#ints14").html(photoArray[i].instructions.step14);
        $("#ints15").html(photoArray[i].instructions.step15);

        (photoArray[i].instructions.step1.length > 2) ? $("#ints1").html(photoArray[i].instructions.step1) : $("#ints1").css("display", "none");
        (photoArray[i].instructions.step2.length > 2) ? $("#ints2").html(photoArray[i].instructions.step2) : $("#ints2").css("display", "none");
        (photoArray[i].instructions.step3.length > 2) ? $("#ints3").html(photoArray[i].instructions.step3) : $("#ints3").css("display", "none");
        (photoArray[i].instructions.step4.length > 2) ? $("#ints4").html(photoArray[i].instructions.step4) : $("#ints4").css("display", "none");
        (photoArray[i].instructions.step5.length > 2) ? $("#ints5").html(photoArray[i].instructions.step5) : $("#ints5").css("display", "none");
        (photoArray[i].instructions.step6.length > 2) ? $("#ints6").html(photoArray[i].instructions.step6) : $("#ints6").css("display", "none");
        (photoArray[i].instructions.step7.length > 2) ? $("#ints7").html(photoArray[i].instructions.step7) : $("#ints7").css("display", "none");
        (photoArray[i].instructions.step8.length > 2) ? $("#ints8").html(photoArray[i].instructions.step8) : $("#ints8").css("display", "none");
        (photoArray[i].instructions.step9.length > 2) ? $("#ints9").html(photoArray[i].instructions.step9) : $("#ints9").css("display", "none");
        (photoArray[i].instructions.step10.length > 2) ? $("#ints10").html(photoArray[i].instructions.step10) : $("#ints10").css("display", "none");
        (photoArray[i].instructions.step11.length > 2) ? $("#ints11").html(photoArray[i].instructions.step11) : $("#ints11").css("display", "none");
        (photoArray[i].instructions.step12.length > 2) ? $("#ints12").html(photoArray[i].instructions.step12) : $("#ints12").css("display", "none");
        (photoArray[i].instructions.step13.length > 2) ? $("#ints13").html(photoArray[i].instructions.step13) : $("#ints13").css("display", "none");
        (photoArray[i].instructions.step14.length > 2) ? $("#ints14").html(photoArray[i].instructions.step14) : $("#ints14").css("display", "none");
        (photoArray[i].instructions.step15.length > 2) ? $("#ints15").html(photoArray[i].instructions.step15) : $("#ints15").css("display", "none");


        $(".recipe-info").css("display", "flex").hide().fadeIn(150);
    }

    // Close recipe info
    $(".close-recipe, .close-recipe-info").click(function () {
        $(".recipe-info").fadeOut(150);
    });

    // Show error if no results
    showEmptySet = function () {
        $(".food-set").slideDown(150);
        $(".food-controls").slideDown(150);
    }

   
});