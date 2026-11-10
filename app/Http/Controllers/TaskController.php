<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $tasks = $request->user()
            ->tasks()
            ->orderBy('is_completed')
            ->orderByRaw('due_at is null')
            ->orderBy('due_at')
            ->latest()
            ->get();

        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate($this->rules());

        $request->user()->tasks()->create($validated);

        return Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Task added',
            'description' => $validated['title'],
        ])->back();
    }

    public function update(Request $request, Task $task): RedirectResponse
    {
        $task = $request->user()->tasks()->findOrFail($task->id);

        $task->update($request->validate($this->rules()));

        return Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Task updated',
            'description' => $task->title,
        ])->back();
    }

    public function toggle(Request $request, Task $task): RedirectResponse
    {
        $task = $request->user()->tasks()->findOrFail($task->id);

        $completed = ! $task->is_completed;

        $task->update([
            'is_completed' => $completed,
            'completed_at' => $completed ? now() : null,
        ]);

        return Inertia::flash('toast', [
            'type' => $completed ? 'success' : 'info',
            'message' => $completed ? 'Task completed' : 'Task reopened',
            'description' => $task->title,
        ])->back();
    }

    public function destroy(Request $request, Task $task): RedirectResponse
    {
        $task = $request->user()->tasks()->findOrFail($task->id);

        $task->delete();

        return Inertia::flash('toast', [
            'type' => 'success',
            'message' => 'Task deleted',
            'description' => $task->title,
        ])->back();
    }

    /**
     * @return array<string, array<int, string>>
     */
    private function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'project' => ['nullable', 'string', 'max:80'],
            'due_at' => ['nullable', 'date'],
        ];
    }
}
