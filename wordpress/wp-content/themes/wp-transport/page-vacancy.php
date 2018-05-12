<?php
/*
Template Name: Vacancy Page
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
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2><?php the_field('vacancy_subtitle'); ?></h2>
            </div>
            <?php if( have_rows('vacancies') ): ?>
              <?php while ( have_rows('vacancies') ) : the_row(); ?>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 job"><?php the_sub_field('vacancy'); ?></div>
              <?php endwhile; ?>
            <?php endif; ?>
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>

  <?php endwhile; endif; ?>
<?php get_footer(); ?>
