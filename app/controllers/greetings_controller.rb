class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
  end

  def create
    greeting = Greeting.new(greeting_params)
    greeting.save!
    render json: greeting
  end

  private

  def greeting_params
    params.require(:greeting).permit(:name)
  end
end
