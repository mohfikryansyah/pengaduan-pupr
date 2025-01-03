<?php

use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\ServiceUnavailableHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        // 404 Not Found
        $exceptions->renderable(function (NotFoundHttpException $e) {
            return Inertia::render('Errors/404')
                ->toResponse(request())
                ->setStatusCode(404);
        });

        // 403 Forbidden
        $exceptions->renderable(function (\Illuminate\Auth\Access\AuthorizationException $e) {
            return Inertia::render('Errors/403')
                ->toResponse(request())
                ->setStatusCode(403);
        });

        // 405 Method Not Allowed
        $exceptions->renderable(function (MethodNotAllowedHttpException $e) {
            return Inertia::render('Errors/405')
                ->toResponse(request())
                ->setStatusCode(405);
        });

        // 503 Service Unavailable
        $exceptions->renderable(function (ServiceUnavailableHttpException $e) {
            return Inertia::render('Errors/503')
                ->toResponse(request())
                ->setStatusCode(503);
        });

        // 500 Internal Server Error
        $exceptions->renderable(function (\Throwable $e) {
            if (!($e instanceof HttpException)) {
                return Inertia::render('Errors/500')
                    ->toResponse(request())
                    ->setStatusCode(500);
            }
        });
    })
    ->create();
