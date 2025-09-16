<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function chat(Request $request)
    {
        $apiKey = "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";

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
