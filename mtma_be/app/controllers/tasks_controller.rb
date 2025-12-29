class TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]
  allow_unauthenticated_access only: %i[ statuses ]

  # GET /tasks - all tasks for current user
  def index
    @tasks = Current.user.tasks

    render json: @tasks
  end

  # GET /tasks/1 - Single task
  def show
    render json: @task
  end

  # POST /tasks - create task for current user
  def create
    @task = Current.user.tasks.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /tasks/1 - update task for current user
  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_content
    end
  end

  # DELETE /tasks/1 - remove task for current user
  def destroy
    @task.destroy!
    render json: { message: 'Task Deleted' }
  end

  # GET /tasks/statuses - shows the status enum
  def statuses
    render json: Task.statuses.map {|item| { id: item[1], name: item[0]} }
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    # Get a single task for the current user
    def set_task
      @task = Task.where(id: params.expect(:id), user_id: Current.user.id).first
      if @task.blank?
        render json: { errors: "Task Not Found for Current User" }, status: :unprocessable_entity
      end
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.expect(task: [ :user_id, :title, :description, :due_date, :status ])
    end
end
