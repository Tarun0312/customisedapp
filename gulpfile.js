const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = {
  appComponents: 'src/app/components/**/*',
  customizations: 'src/customizations/components/**/*', // Adjusted path to match your structure
};

// Task to override components with customizations
gulp.task('override-components', () => {
  return gulp.src(paths.customizations)
    .pipe(gulp.dest('src/app/components')); // Copy from customizations to app/components
});

// Task to serve the app with BrowserSync
gulp.task('serve', () => {
  browserSync.init({
    proxy: 'http://localhost:4200',
    files: [paths.appComponents,paths.customizations], // Watch app components for changes
 
  });

  gulp.watch(paths.customizations, gulp.series('override-components')); // Watch customizations for changes
});

// Default task
gulp.task('default', gulp.series('override-components', 'serve'));



















// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const concat = require('gulp-concat'); // For merging content
// const browserSync = require('browser-sync').create();

// const paths = {
//   appComponentsScss: 'src/app/components/**/*.scss', // SCSS files in app components
//   customizationsScss: 'src/customizations/components/**/*.scss', // Custom SCSS files
// };

// // Task to merge and update SCSS files
// gulp.task('merge-scss', () => {
//   return gulp.src([paths.appComponentsScss, paths.customizationsScss])
//     .pipe(concat('header.component.scss')) // Ensure the merged output matches the target file name
//     .pipe(gulp.dest('src/app/components/header')); // Overwrite the SCSS file
// });



// // Task to watch for changes and dynamically update
// gulp.task('serve', () => {
//   browserSync.init({
//     proxy: 'http://localhost:4200', // Proxy the Angular app
//     files: ['src/app/components/**/*'], // Watch all files in app components for changes
//   });

//   // Watch for changes in customizations and app SCSS
//   gulp.watch(paths.customizationsScss, gulp.series('merge-scss', 'compile-scss'));
//   gulp.watch(paths.appComponentsScss, gulp.series('compile-scss'));
// });

// // Default task
// gulp.task('default', gulp.series('merge-scss', 'compile-scss', 'serve'));

