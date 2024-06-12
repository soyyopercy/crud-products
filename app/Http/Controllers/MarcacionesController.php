<?php

namespace App\Http\Controllers;

use App\Models\Marcaciones;
use Illuminate\Http\Request;
use App\Providers\RouteServiceProvider;
use Inertia\Inertia;

class MarcacionesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Marcaciones');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        {
            $request->validate([
                'dni' => 'required|max:8',
        'tipo_evento' => 'required|max:15',
        'tiempo'=>'required|max:100',
        'ip_publica'=>'required|max:15',
        'coordenadas'=>'required|max:255'
            ]);
    
            $user = User::create([
                'dni' => $request->dni,
                'tipo_evento' => $request->tipo_evento,
                'tiempo' => $request->tiempo,
                'ip_publica' => $request->ip_publica,
                'coordenadas' => $request->coordenadas,
                
                
            ]);
    
            event(new Marcaciones($user));
    
            Auth::login($user);
    
            return redirect(RouteServiceProvider::HOME);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Marcaciones $marcaciones)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marcaciones $marcaciones)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Marcaciones $marcaciones)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Marcaciones $marcaciones)
    {
        //
    }
}
