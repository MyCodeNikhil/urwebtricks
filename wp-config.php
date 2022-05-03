<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'urwebtricks' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'F/5 Oaav9(@C{37F@Nl%i|~vXBq&#Jv&VxM9!hd+97.+e%yGV9fxzK}2TLwX)=Y8' );
define( 'SECURE_AUTH_KEY',  'm3B_Omgk!&f8IN;}&(+NYiC2V[|U{ ] k|z[`s&=_T6DO&2jw)3tB<w%QWrR,b@|' );
define( 'LOGGED_IN_KEY',    '/O#[gZ!dgyK<iq8q5u@]O@61wko6a$`2SG^rE0Z^@axG}MI1I-lJa|((IKOj(w#)' );
define( 'NONCE_KEY',        'nN^VghN:5h5W}*Qx8&x!;S=07R!diKmNJI-wxnUG7JGAy{j=+Cg}Yn&aq&YX:VEb' );
define( 'AUTH_SALT',        '1<+N;B@^][]dKIeI0sXcdZCHrC|?qH<WWbUNe<wz03,Tv~MjE6er9Q[l-19P?ow|' );
define( 'SECURE_AUTH_SALT', ';ap=85kA)m)>:#gy3}Pe[|,FIJH}:(|F:~U_L0y>!p[$mLUA{fi@Mm(mu::gQ}t-' );
define( 'LOGGED_IN_SALT',   'X|6ZF/wWL^A,xW5-@$n(kRTD0P6BQPV#>YC*{d}nyf<g,v<(6}#&(Vc1KeScN<G)' );
define( 'NONCE_SALT',       'rWl}:n2ir1u5MCj8k&gIX|E;<w_Dgr[zs*5B:Q.T=Xh,6%>JTe<(nqM}I4J*1wqI' );

/**#@-*/

/**
 * WordPress database table prefix.
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
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define('FS_METHOD','direct');
define("FTP_HOST", "localhost");
define("FTP_USER", "epiz_31524811");
define("FTP_PASS", "Nikhil2001");

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
