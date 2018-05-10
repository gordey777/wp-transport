<?php get_header(); ?>
  <?php $curr__ID = get_queried_object()->cat_ID; ?>
  <?php $curr_term = 'category_' . $curr__ID; ?>
  <?php $front__id = (int)(get_option( 'page_on_front' )); ?>


  <div class="page__content">
    <div class="container">
          <?php easy_breadcrumbs(); ?>
      <h1 class="page__header">Каталог строительной техники</h1>
      <div class="container-inner">
        <div class="wrapper">
          <div class="spec-categories">
            <div class="row">
              <?php
              $teh_cats = get_categories( array(
                'child_of' => $curr__ID,
                'parent' => $curr__ID,
                'hide_empty' => 0
              ) );
              if( $teh_cats ){
                foreach( $teh_cats as $cat ){
                  $teh_catID = $cat->cat_ID;
                  $cutTerm = 'category_'.$teh_catID;
                  //var_dump($cut_term);
                  $cut_thumb = get_field('cat_img', $cutTerm);

                  if($cut_thumb){
                    $thumb_url = $cut_thumb['sizes']['medium'];
                  } else {
                    $thumb_url = get_template_directory_uri() . '/img/noimage.jpg';
                  } ?>
                  <div class='looper col-sm-6 col-md-4 col-lg-3'>
                    <a href="<?php echo get_category_link( $teh_catID ); ?>" title="<?php echo $cat->name; ?>" class="spec-categories__item">
                      <div class="spec-categories__item-cover" style="background-image: url(<?php echo $thumb_url; ?>)" ></div>
                      <div class="spec-categories__item-footer"><?php echo $cat->name . $cut_term; ?></div>
                    </a>
                  </div><!-- /looper -->

                <?php }
              } else if (have_posts()) {
                while (have_posts()) : the_post(); ?>
                <div id="post-<?php the_ID(); ?>" <?php post_class('looper col-sm-6 col-md-4 col-lg-3'); ?>>

                <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="spec-categories__item">
                  <div class="spec-categories__item-cover"
                    <?php if ( has_post_thumbnail()) { ?>
                      style="background-image: url(<?php echo the_post_thumbnail_url('medium'); ?>)"
                    <?php } else { ?>
                      style="background-image: url(<?php echo catchFirstImage(); ?>)"
                    <?php } ?>></div>
                  <div class="spec-categories__item-footer"><?php the_title(); ?></div>
                </a>
                </div><!-- /looper -->
              <?php endwhile;
            } ?>
              <div class="clearfix"></div>
              <?php get_template_part('pagination'); ?>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php get_footer(); ?>
