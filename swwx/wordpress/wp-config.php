<?php
/**
 * WordPress基础配置文件。
 *
 * 本文件包含以下配置选项：MySQL设置、数据库表名前缀、密钥、
 * WordPress语言设定以及ABSPATH。如需更多信息，请访问
 * {@link http://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 * 编辑wp-config.php}Codex页面。MySQL设置具体信息请咨询您的空间提供商。
 *
 * 这个文件被安装程序用于自动生成wp-config.php配置文件，
 * 您可以手动复制这个文件，并重命名为“wp-config.php”，然后填入相关信息。
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** WordPress数据库的名称 */
define('DB_NAME', 'test');

/** MySQL数据库用户名 */
define('DB_USER', 'root');

/** MySQL数据库密码 */
define('DB_PASSWORD', 'root');

/** MySQL主机 */
define('DB_HOST', 'localhost');

/** 创建数据表时默认的文字编码 */
define('DB_CHARSET', 'utf8');

/** 数据库整理类型。如不确定请勿更改 */
define('DB_COLLATE', '');

/**#@+
 * 身份认证密钥与盐。
 *
 * 修改为任意独一无二的字串！
 * 或者直接访问{@link https://api.wordpress.org/secret-key/1.1/salt/
 * WordPress.org密钥生成服务}
 * 任何修改都会导致所有cookies失效，所有用户将必须重新登录。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'tAF+g=nTSAo>k6Wu}~2ofjhdr%u&nl|L(.rj!XkHzOz)=p*)img&vX9jb[l=T$q#');
define('SECURE_AUTH_KEY',  'mR{@~Y{y5IJ~%|x2VxI_ 8QM@k 6tf?fl|D/F7nvr.~UetMCT{M3VADi^9%aEPKM');
define('LOGGED_IN_KEY',    'Z7HQmOb1LdLD+UH@$,&LX@pT&Qdq;_N _0RF>b57W*fEbZxAS^ b6mv$kN8$BJTm');
define('NONCE_KEY',        'Y,3#2b[,e(${8w%O~2[.~P<uF;i@(DKGbw<neG7w<LMsTW2t,&cfBXM{]iaV=Cnb');
define('AUTH_SALT',        'Z*x705I}A8*HPdb-=H1#Fm2bp_sfF`DrfV(RSb4>>/MC!0<TDI?zBMQ>idz{G3%]');
define('SECURE_AUTH_SALT', '.Ef1(_obr1,cg4L%6~EV}Sn}*<#nrkyNwVQ+.mB;.ki)5vP=y+vl5[n_Q^YteV=b');
define('LOGGED_IN_SALT',   '/HNk@v@(/t kU?./ yO`Jo3,%.|=I3&7yNj^;%J,epn}! cM={1FhaG@4hHQ>uu-');
define('NONCE_SALT',       'S4SaKdp$|F@b.G_a;F&Q8,.o-vLM6+L+F[lIk@y;Q*x9pd^$,`)h2o1 ji?LHD<D');

/**#@-*/

/**
 * WordPress数据表前缀。
 *
 * 如果您有在同一数据库内安装多个WordPress的需求，请为每个WordPress设置
 * 不同的数据表前缀。前缀名只能为数字、字母加下划线。
 */
$table_prefix  = 'wp_test';

/**
 * 开发者专用：WordPress调试模式。
 *
 * 将这个值改为true，WordPress将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用WP_DEBUG。
 */
define('WP_DEBUG', false);

/**
 * zh_CN本地化设置：启用ICP备案号显示
 *
 * 可在设置→常规中修改。
 * 如需禁用，请移除或注释掉本行。
 */
define('WP_ZH_CN_ICP_NUM', true);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress目录的绝对路径。 */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** 设置WordPress变量和包含文件。 */
require_once(ABSPATH . 'wp-settings.php');
