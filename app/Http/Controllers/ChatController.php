<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $apiKey = env('GROQ_API_KEYS', '');

        $model = $request->string('model')->toString() ?: 'llama-3.3-70b-versatile';

        $messages = $request->input('messages', []);

        $payload = [
            'model' => $model,
            'messages' => $messages,
            'temperature' => (float)($request->input('temperature', 0.5)),
            'stream' => false,
        ];
    }
}
