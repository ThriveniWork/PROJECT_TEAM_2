$(document).ready(function() {
    // Ensure Bootstrap hamburger menu functionality
    $(".navbar-toggler").click(function() {
        $("#navbarNav").toggleClass("show");
    });

    // Animate the navbar on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("bg-dark");
        } else {
            $(".navbar").removeClass("bg-dark");
        }
    });

    // Form validation feedback
    $("form").on("submit", function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();

        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Form submitted successfully!");
        }
    });

    // Load blog content dynamically via AJAX
    $("#loadMorePosts").click(function() {
        $.ajax({
            url: "blog-posts.json",
            type: "GET",
            success: function(response) {
                response.posts.forEach(post => {
                    $(".blog-container").append(
                        `<div class='blog-post'><h2>${post.title}</h2><p>${post.content}</p></div>`
                    );
                });
            }
        });
    });
});
