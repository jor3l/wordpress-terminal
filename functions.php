<?php

add_action('wp_ajax_get_ajax_posts', 'get_ajax_posts');
add_action('wp_ajax_nopriv_get_ajax_posts', 'get_ajax_posts');

function get_ajax_posts() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type, origin");

    $recent_posts = wp_get_recent_posts(array(
        'numberposts' => 10, // Number of recent posts thumbnails to display
        'post_status' => 'publish' // Show only the published posts
    ));

    $response = [];
    foreach($recent_posts as $post) {
        $response[] = [
            "title" => $post['post_title'],
            "url" => get_permalink( $post['ID'] )
        ];
    }

    echo json_encode( $response );
    wp_die();
}


add_action('wp_ajax_get_ajax_post', 'get_ajax_post');
add_action('wp_ajax_nopriv_get_ajax_post', 'get_ajax_post');

function get_ajax_post() {
    // Fetch the post
    $post = get_post(url_to_postid($_POST['post']));

    // Check if the post exists
    if( $post ) {
        // Now, form our own array
        $data = array();
        $data['id'] = $post->ID;
        $data['date'] = $post->post_date;
        $data['date_gmt'] = $post->post_date_gmt;
        $data['guid'] = $post->guid;
        $data['modified'] = $post->post_modified;
        $data['modified_gmt'] = $post->post_modified_gmt;
        $data['slug'] = $post->post_name;
        $data['status'] = $post->post_status;
        $data['title'] = $post->post_title;
        $data['content'] = $post->post_content;
        $data['excerpt'] = $post->post_excerpt;
        // Add the rest of your content

        // Return the response
        echo json_encode( $data  );
    }
    
    wp_die();
}