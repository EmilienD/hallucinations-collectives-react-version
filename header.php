<meta property="og:image"
  content="<?php echo (is_single() ?  the_post_thumbnail( 'large' ) : get_bloginfo('template_directory') . '/hallu-2019-poster.jpg'); ?>" />
<?php if(is_single()) {
  $image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' );
  $image_width = $image_data[1];
  $image_height = $image_data[2];
  ?>
<meta property="og:image:width" content="<?php echo $image_width; ?>" />
<meta property="og:image:height" content="<?php echo $image_height; ?>" />
<?php
}
?>
<meta property="og:url" content="<?php echo get_permalink(); ?>" />
<title>
  <?php echo is_single() ?  the_title() : get_bloginfo('name'); ?>
</title>