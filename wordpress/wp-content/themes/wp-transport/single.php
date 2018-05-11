<?php get_header(); ?>

  <?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <div  id="post-<?php the_ID(); ?>" <?php post_class('page__content'); ?>>
        <div class="container">
          <?php easy_breadcrumbs(); ?>
          <h1 class="page__header"><?php the_title(); ?></h1><?php edit_post_link(); ?>
            <div class="container-inner">
                <div class="wrapper servises-cont">
                    <?php if ( has_post_thumbnail()) :?>
                      <?php the_post_thumbnail('medium'); ?>
                    <?php endif; ?>
                    <?php the_content(); ?>
                    <br>
                </div>
            </div>
        </div>
    </div>
  <?php endwhile; endif; ?>


<?php get_footer(); ?>
