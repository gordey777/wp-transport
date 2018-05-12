<?php
/*
Template Name: Contacts Page
Template Post Type: post, page
*/
get_header(); ?>
  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <?php $postID = get_the_ID(); ?>
    <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
      <div class="container">
        <?php easy_breadcrumbs(); ?>
        <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
        <div class="container-inner">
          <div class="wrapper">
            <div class="container" align="center">
              <?php the_content(); ?>
              <br>
              <br>
              <br>
              <?php if( have_rows('partners') ): ?>
                <div class="row partners__list">
                  <?php while ( have_rows('partners') ) : the_row(); ?>
                    <?php $img = get_sub_field('logo'); ?>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 ">
                      <div class="contact-officer ">
                        <div class="contact-officer__avatar-wrapper" style="background-image: url(<?php echo $img['sizes']['medium']; ?>)" title="<?php the_sub_field('title'); ?>">
                          <!-- <img src="<?php echo $img['sizes']['medium']; ?>" alt="<?php the_sub_field('title'); ?>"> -->
                        </div>
                      </div>
                    </div>
                  <?php endwhile; ?>
                </div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endwhile; endif; ?>
<?php get_footer(); ?>
