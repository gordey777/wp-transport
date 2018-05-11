<?php
/*
Template Name: Logistic Page
Template Post Type: post, page
*/
get_header(); ?>


    <?php
    $category = get_the_category();
    $postcatID =  $category[0]->cat_ID;
    $postID = get_the_ID();
    $postcatParent =  $category[0]->parent;

    $logistic_children = new WP_Query(array(
      'post_type'   => 'page',
      'post_parent' => $postID,
      'orderby'     => 'name',
      'order'       => 'ASC',
      )
    );
?>

  <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
    <div class="container">
      <?php easy_breadcrumbs(); ?>
      <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
      <div class="container-inner">
        <div class="wrapper">
          <?php the_content(); ?>
          <div class="logistics">
            <?php if($logistic_children->have_posts()) : ?>
              <?php while($logistic_children->have_posts()): $logistic_children->the_post(); ?>
                <div class="logistics__item">
                  <a href="<?php the_permalink(); ?>" class="logistics__item-left">
                    <span>Узнать больше</span>
                  </a>
                  <div class="logistics__item-right" style="background-image: url(<?php the_post_thumbnail_url(); ?>);">
                    <div class="logistics__item-text">
                      <div class="logistics__item-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                      </div>
                      <?php the_field('logistic_desc'); ?>
                    </div>
                  </div>
                </div>
              <?php endwhile; ?>
            <?php endif; ?>
            <?php wp_reset_query(); ?>
          </div>
        </div>
      </div>
    </div>
  </div>





<?php get_footer(); ?>
