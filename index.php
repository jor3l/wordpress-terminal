<!DOCTYPE html>
<html lang="en">
  <head>
    <title>loading...</title>
    <title><?php echo get_bloginfo( 'name' ); ?></title>
    <meta charset="utf-8">
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?php echo get_bloginfo( 'name' ); ?>" />
    <meta property="og:description" content="<?php echo get_bloginfo( 'description' ); ?>" />
    <meta property="og:url" content="https://jose.com.co/" />
    <meta property="og:keywords" content="Code, Command Line, Projects" />
    <meta property="og:site_name" content="@jor3l - web developer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Code, Command Line, Projects">
    <meta name="description" content="<?php echo get_bloginfo( 'description' ); ?>">
    <meta property="og:image" content="favicon.ico" />
    <meta name="robots" content="index,follow">
    <meta charset="utf-8">
    <link href="<?php bloginfo('template_directory'); ?>/dist/main.css" rel="stylesheet">
    <?php wp_head(); ?>
    <script>window.base_uri = '<?php echo admin_url('admin-ajax.php');?>';</script>
  </head>
  <body class="crt">
    <noscript>
      <div class="line">
        It looks like javascript has been disabled on your browser. This website
        runs on javascript for user experience. Please enable it and refresh the
        website.
      </div>
      <br>
    </noscript>
    <div id="terminal"></div>
  <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/dist/1.js"></script>
  <script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/dist/main.js"></script></body>
</html>
