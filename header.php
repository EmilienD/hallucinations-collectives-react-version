<?php if(is_single()) {
  setup_postdata($post);
  $image_data = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'large' );
  $image_width = $image_data[1];
  $image_height = $image_data[2];
  ?>
<meta property="og:image" content="<?php echo get_the_post_thumbnail_url($post, 'large'); ?>" />
<meta property="og:image:width" content="<?php echo $image_width; ?>" />
<meta property="og:image:height" content="<?php echo $image_height; ?>" />
<meta property="og:type" content="article" />
<meta property="og:url" content="<?php echo get_permalink(); ?>" />
<meta property="og:title" content="<?php the_title() ?>" />
<title>
  <?php the_title() ?>
</title>
<?php
} else {
?>
<meta property="og:image" content="<?php echo get_bloginfo('template_directory') . '/hallu-2019-poster.jpg'; ?>" />
<meta property="og:type" content="website" />
<meta property="og:title" content="<?php echo get_bloginfo('name'); ?>" />
<title>
  <?php echo get_bloginfo('name'); ?>
</title>
<?php
}
?>