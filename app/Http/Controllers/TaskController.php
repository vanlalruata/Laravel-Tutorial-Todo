<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    //
    public function index(Request $request)
    {
        $tasks = $request->user()
            ->tasks()
            ->latest()
            ->get();

        return Inertia::render('Tasks/Index', ['tasks' => $tasks]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable','string', 'max:1000'],
        ]);

        $request->user()->tasks()->create($validated);

        return redirect()->route('tasks.index')
            ->with('success', 'Task created successfully');
    }

    public function update(Request $request, Task $task)
    {
        $task = $request->user()->tasks()->findOrFail($task->id);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable','string', 'max:1000'],
        ]);

        $task->update($validated);

        return redirect()->route('tasks.index')
            ->with('success', 'Task updated successfully');
    }

    public function toggle(Request $request, Task $task)
    {
        $task = $request->user()->tasks()->findOrFail($task->id);

        $task->update(['is_completed' => !$task->is_completed]);

        return redirect()->route('tasks.index')
            ->with('success', 'Task status updated successfully');
    }

    public function destroy(Request $request, Task $task)
    {
        $task = $request->user()->tasks()->findOrFail($task->id);
        $task->delete();

        return redirect()->route('tasks.index')
            ->with('success', 'Task deleted successfully');
    }

}
