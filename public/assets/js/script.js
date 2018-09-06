// Wait until the DOM is fully loaded
$(function() {
    // When the Submit button is clicked, add a new burger to the database
    $("#add-btn").on("click", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    // When an Order button is clicked, change "devoured" from false to true
    $(".order-btn").on("click", function(event) {
        var id = $(this).data("id");
        var newState = {
            devoured: true
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            location.reload();
        })
    });

});