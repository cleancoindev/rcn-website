const gulp = require('gulp')
const config = require('../config')
const del = require('del')

gulp.task('clean', () =>
  del([
    config.directories.dist.base
  ])
)

gulp.task('images', () =>
  gulp.src(config.directories.src.images + '/**/*')
    .pipe(gulp.dest(config.directories.dist.images))
)

gulp.task('head', () =>
  gulp.src(config.directories.src.base + '/assets/head/**/*')
    .pipe(gulp.dest(config.directories.dist.base + '/assets/head'))
)
