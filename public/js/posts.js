$(document).ready(function () {

    var post = [];

    // ************************************** move inside other functionnnnn

    $.get("/api/post", function (data) {
        console.log(data);
        post.push(data);
    }).then(function (data) {

        for (var i = 0; i < data.length; i++) {
            console.log(data[i])
            
        printPost(data)

        function printPost(data){

            var showPost = $("<div>")
            showPost.addClass("view-post")
            showPost.append("<div>" + data[i].post_header + "</div>")
            showPost.append("<div>" + data[i].post_body + "</div>")
            showPost.append("<div>" + data[i].giphy_URL + "</div>")

            $("#get-header").append(showPost)
            
        }

    }

    })

    // ****************************************

    $("#post-button").on("click", function (event) {
        event.preventDefault();
        var postInfo = {
            post_header: $("#post-textHeader").val(),
            post_body: $("#post-textBody").val(),
            giphy_URL: $("#giphy-search").val()
        };

        console.log(postInfo)



        // if (!postInfo.post_header || !postInfo.post_body) {
        //     return;
        // }
        // If we have a header and body, run the postForm function


        $.post("/api/post", postInfo, function (data) {


            console.log(data)

            getPosts();

        });





        // $.post("/api/post", {

        //     post_header: post_header,
        //     post_body: post_body,
        //     giphy_URL: giphy_URL
        // }).then(function (data) {
        //     window.location.replace(data);
        //     // If there's an error, handle it by throwing up a bootstrap alert
        // })
        // .catch(handleLoginErr);

        // userPost(postInfo.post_header, postInfo.post_body, postInfo.giphy_URL);
        // post_header.val("");
        // post_body.val("");
        // giphy_URL.val("");
        // console.log(giphy_URL: giphy_URL.val().trim())

    });
    // post_header, post_body, giphy_URL

    // function userPost(post_header, post_body, giphy_URL) {

    //     console.log("something might be working")

    // }

    function getPosts() {
       

    }
});