<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myshop' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#?_g=c&Hq#~c;tVb$].rK2b6y@6B7]{6SJ;f7+}YB.3Une*DwM(2A8$}D9eliWfm' );
define( 'SECURE_AUTH_KEY',  'a~+jHtcwhX2yZF6Y;dv=k|L&8nb-;9(&5.10](_91rm:ZpD=5*v*V? _?[v7<{YS' );
define( 'LOGGED_IN_KEY',    '2U1V;nd]XEuq6}xEwTm/~=]#UQ}G`Ju^M5WyVmd_#.P.!r3>P/~<C-{[9]JAe$B)' );
define( 'NONCE_KEY',        'V`thu0gH _X($Te9cx++j5^It!0V=KI!jQ_:<K[s1wk UsV%e[4Wp.w@;;5RJ`aA' );
define( 'AUTH_SALT',        '2wUx|WFd<TX{X*|>q:Q>sdVM}BD*Q!5l>>hG^gf{1d>TH{xVP*UAI6uD=hD)oaH8' );
define( 'SECURE_AUTH_SALT', 'sgy8]`?^NdYhs7<LH8;4)@}.f;/p;J|2boeY&~F%fpoDi_/<`CS1ca9%xtbBx*.:' );
define( 'LOGGED_IN_SALT',   '}yjJ)>{;V,CwMmPDp!+53JxS~6[~R9)WCe9jXstu!k!X6IP,E*%Mbeiq7S1OdzNm' );
define( 'NONCE_SALT',       'EV1PY<suM3xJRFQJ<Mib)%I/+3Rd,Pj~_O>*s&E?pd`30Ea1l0Zx*^dXE]sc=ChC' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
