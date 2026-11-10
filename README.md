# Laravel Tutorial Todo

A todo application built with the [Laravel](https://laravel.com) framework, [Vue 3](https://vuejs.org), [Inertia.js](https://inertiajs.com), and [Vite](https://vitejs.dev). It uses Tailwind CSS 4 for styling and SQLite as the default database.

## Requirements

- PHP ^8.3
- [Composer](https://getcomposer.org)
- Node.js and [npm](https://docs.npmjs.com/cli/v10/commands/npm-install)

### Installing PHP

Download and install PHP from [php.net](https://www.php.net/downloads). Ensure the PHP version is ^8.3 and add PHP to your system PATH.

### Installing Composer

Download and install Composer from [getcomposer.org](https://getcomposer.org/download/). Follow the installer for your operating system.

### Installing the Laravel Installer

Install the Laravel installer globally via Composer:

```bash
composer global require laravel/installer
```

Add Composer's global vendor bin directory to your system PATH so the `laravel` command is available.


## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Laravel Tutorial Todo
```

### 2. Install PHP dependencies with Composer

```bash
composer install
```

### 3. Install JavaScript dependencies with npm

```bash
npm install
```

### 4. Set up the environment

Copy the example environment file and generate the application key:

```bash
copy .env.example .env
php artisan key:generate
```

The project uses SQLite by default. Create the database file and run the migrations:

```bash
touch database\database.sqlite
php artisan migrate --force
```

### 5. Build the frontend assets

Compile and minify the CSS and JavaScript assets:

```bash
npm run build
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `composer run dev` | Start the Laravel dev server, queue listener, and Vite dev server concurrently |
| `npm run build` | Build production assets |
| `php artisan migrate` | Run database migrations |
| `php artisan test` | Run the test suite |

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
