<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscription;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletter_subscriptions,email',
        ]);

        NewsletterSubscription::create([
            'email' => $validated['email'],
            'ip_address' => $request->ip(),
        ]);

        return back()->with('success', 'Thanks for subscribing! Stay tuned for exclusive updates and special offers.');
    }
}
